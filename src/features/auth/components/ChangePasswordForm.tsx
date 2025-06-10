import { Button, Form, Input } from "antd";
import { Formik, Form as FormikForm } from "formik";
import { TbLock } from "react-icons/tb";
import * as Yup from "yup";
import { useAppDispatch } from "../../../store/hooks/reduxHooks";
import { cambiarContraseña } from "../../../store/auth/recovery/authSlice";
import { useNavigate } from "react-router-dom";

type ChangePasswordFormData = {
  password: string;
  confirm: string;
};

const validationSchema = Yup.object({
  password: Yup.string()
    .required("La nueva contraseña es requerida.")
    .min(8, "La contraseña debe tener al menos 8 caracteres."),
  confirm: Yup.string()
    .oneOf([Yup.ref("password")], "Las contraseñas no coinciden.")
    .required("La confirmación de contraseña es requerida."),
});

export const ChangePasswordForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values: ChangePasswordFormData) => {
    try {
      await dispatch(cambiarContraseña(values.password)).unwrap();
      navigate("/auth/login");
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
              name="password"
              prefix={<TbLock color="#7c718f" />}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Nueva contraseña"
              autoComplete="new-password"
            />
            {touched.password && errors.password && (
              <div style={{ color: "#FF4D4F", marginTop: 8 }}>{errors.password}</div>
            )}
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={{ display: "block", marginBottom: 8, color: "#444" }}>
              Confirmar contraseña
            </label>
            <Input.Password
              name="confirm"
              prefix={<TbLock color="#7c718f" />}
              value={values.confirm}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Confirmar contraseña"
              autoComplete="new-password"
            />
            {touched.confirm && errors.confirm && (
              <div style={{ color: "#FF4D4F", marginTop: 8 }}>{errors.confirm}</div>
            )}
          </div>

          <Form.Item style={{ marginTop: 32 }}>
            <Button block type="primary" htmlType="submit">
              Cambiar contraseña
            </Button>
          </Form.Item>
        </FormikForm>
      )}
    </Formik>
  );
};
