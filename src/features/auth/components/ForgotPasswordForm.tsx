import { Button, Form, Input } from "antd";
import { Formik, Form as FormikForm } from "formik";
import { TbMail } from "react-icons/tb";
import * as Yup from "yup";


import { useAppDispatch } from "../../../store/hooks/reduxHooks";
import { passwordThunk } from "../../../store/auth/thunks/forgotPassword.thunk";

type PasswordFormData = {
  user_email: string;
};

const validationSchema = Yup.object({
  user_email: Yup.string()
    .email("Debe ser un correo electrónico valido.")
    .required("El correo electrónico es requerido."),
});

export const ForgotPasswordForm = () => {
  const dispatch = useAppDispatch();

  const handleLogin = (values: PasswordFormData) => {
    console.log(values);

    dispatch(passwordThunk({email: values.user_email}))
  };

  return (
    <Formik
      initialValues={{ user_email: ""}}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      {({ values, errors, handleChange, handleBlur, touched }) => (
        <FormikForm autoComplete="off">
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: "block", marginBottom: 8, color: "#444" }}>
              Correo electrónico
            </label>
            <Input
              name="user_email"
              prefix={<TbMail color="#7c718f" />}
              value={values.user_email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Correo electrónico"
              autoComplete="new-email"
            />
            {touched.user_email && errors.user_email && (
              <div style={{ color: "#FF4D4F", marginTop: 8 }}>
                {errors.user_email}
              </div>
            )}
          </div>
          <Form.Item style={{ marginTop: 32 }}>
            <Button block type="primary" htmlType="submit">
              Enviar código
            </Button>
          </Form.Item>
        </FormikForm>
      )}
    </Formik>
  );
};
