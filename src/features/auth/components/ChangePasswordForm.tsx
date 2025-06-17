import { Button, Form, Input } from "antd";
import { Formik, Form as FormikForm } from "formik";
import { TbLock } from "react-icons/tb";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/reduxHooks";
import { useNavigate } from "react-router-dom";
import { changepasswordThunk } from "../../../store/recovery/thunks/ChangePassword.thunk"


type ChangePasswordFormData = {
  password: string;
  confirm: string;
};

const validationSchema = Yup.object({
  password: Yup.string()
    .required("La nueva contraseña es requerida.")
    .min(8, "La contraseña debe tener al menos 8 caracteres.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
      "La contraseña debe tener al menos 8 caracteres, incluyendo una letra minúscula, una mayúscula, un número y un carácter especial (ej. !@#$%^&*)."
    ),
  confirm: Yup.string()
    .oneOf([Yup.ref("password")], "Las contraseñas no coinciden.")
    .required("La confirmación de contraseña es requerida."),
});

export const ChangePasswordForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading } = useAppSelector(state => state.ui.authUI.status)

  const handleSubmit = async (values: ChangePasswordFormData) => {
    try {
      await dispatch(changepasswordThunk(values.password)).unwrap();
      setTimeout(() => {
      navigate("/auth/login");
    }, 3000);
    } catch (error) {
      console.error("Error al cambiar la contraseña:", error);
    }
  };

  return (
    <Formik
      initialValues={{ password: "", confirm: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <FormikForm autoComplete="off">
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: "block", marginBottom: 8, color: "#444" }}>
              Nueva contraseña
            </label>
            <Input.Password
              disabled={loading}
              name="password"
              prefix={<TbLock color="#7c718f" />}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Nueva contraseña"
              autoComplete="new-password"
            />
            {touched.password && errors.password && (
              <div style={{ color: "#FF4D4F", marginTop: 8 }}>
                {errors.password}
              </div>
            )}
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={{ display: "block", marginBottom: 8, color: "#444" }}>
              Confirmar contraseña
            </label>
            <Input.Password
              disabled={loading}
              name="confirm"
              prefix={<TbLock color="#7c718f" />}
              value={values.confirm}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Confirmar contraseña"
              autoComplete="new-password"
            />
            {touched.confirm && errors.confirm && (
              <div style={{ color: "#FF4D4F", marginTop: 8 }}>
                {errors.confirm}
              </div>
            )}
          </div>

          <Form.Item style={{ marginTop: 32 }}>
            <Button loading={loading} block type="primary" htmlType="submit">
              Cambiar contraseña
            </Button>
          </Form.Item>
        </FormikForm>
      )}
    </Formik>
  );
};
