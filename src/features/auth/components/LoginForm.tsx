import { Button, Flex, Form, Input, Typography } from "antd";
import { Formik, Form as FormikForm } from "formik";
import { TbLock, TbMail } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const { Text } = Typography;

type LoginFormData = {
  user_email: string;
  user_password: string;
};

const validationSchema = Yup.object({
  user_email: Yup.string()
    .email("Eso no es un correo")
    .required("El correo es requerido."),
  user_password: Yup.string().required("La contraseña es requerida."),
});

export const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = (values: LoginFormData) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ user_email: "", user_password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      {({ values, errors, handleChange, handleBlur, touched }) => (
        <FormikForm autoComplete="off">
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: "block", marginBottom: 8, color: "#444" }}>
              Correo Electronico
            </label>
            <Input
              name="user_email"
              prefix={<TbMail color="#7c718f" />}
              value={values.user_email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Correo electronico"
              autoComplete="new-email"
            />
            {touched.user_email && errors.user_email && (
              <div style={{ color: "#FF4D4F", marginTop: 8 }}>
                {errors.user_email}
              </div>
            )}
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: "block", marginBottom: 8, color: "#444" }}>
              Contraseña
            </label>
            <Input.Password
              name="user_password"
              prefix={<TbLock color="#7c718f" />}
              value={values.user_password}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="new-password"
              placeholder="Contraseña"
            />
            {touched.user_password && errors.user_password && (
              <div style={{ color: "#FF4D4F", marginTop: 8 }}>
                {errors.user_password}
              </div>
            )}
          </div>
          <Flex justify="end" align="center">
            <Text
              onClick={() => navigate("/auth/forgot-password")}
              style={{ cursor: "pointer", color: "#444", userSelect: "none" }}
            >
              ¿Olvidaste tu contraseña?
            </Text>
          </Flex>
          <Form.Item style={{ marginTop: 32 }}>
            <Button block type="primary" htmlType="submit">
              Iniciar Sesión
            </Button>
          </Form.Item>
        </FormikForm>
      )}
    </Formik>
  );
};
