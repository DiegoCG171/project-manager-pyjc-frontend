import React from 'react';
import '../../../shared/styles/changepassword.css';
import { Form, Input, Button, Typography, message } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { cambiarContraseña } from '../../../store/auth/authSlice';
import type { RootState, AppDispatch } from '../../../store/store';
import * as Yup from 'yup';

const { Title, Paragraph } = Typography;

//validacion de datos

const passwordSchema = Yup.object().shape({
  password: Yup.string()
    .required('La nueva contraseña es requerida.')
    .min(8, 'La contraseña debe tener al menos 8 caracteres.'),
  confirm: Yup.string()
    .required('La confirmación de contraseña es requerida.')
    .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden.'),
});

export const ChangePasswordForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [form] = Form.useForm();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const onFinish = async (values: any) => {
    try {
      await passwordSchema.validate(values, { abortEarly: false });

// notificación de cambio de contraseña

      await dispatch(cambiarContraseña(values.password)).unwrap();
      message.success('¡Contraseña cambiada con éxito!');
      form.resetFields();
    } catch (err: any) {
      if (err.name === 'ValidationError') {
        const errors = err.inner.map((e: any) => ({
          name: e.path,
          errors: [e.message],
        }));
        form.setFields(errors);
      } else {
        message.error(error || 'Ocurrió un error.');
      }
    }
  };

  return (
    <div className="change-password-container">
      <Title level={3} className="change-password-title">
        Crea una nueva contraseña
      </Title>

      <Paragraph className="change-password-description">
        Ingresa una nueva contraseña para recuperar el acceso a tu cuenta de P&amp;JC.
      </Paragraph>

      <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
        <Form.Item name="password" label="Nueva contraseña">
          <Input.Password
            placeholder="Nueva contraseña"
            prefix={<LockOutlined style={{ color: '#bfbfbf' }} />}
          />
        </Form.Item>

        <Form.Item name="confirm" label="Confirmar contraseña">
          <Input.Password
            placeholder="Confirmar contraseña"
            prefix={<LockOutlined style={{ color: '#bfbfbf' }} />}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            className="change-password-button"
            loading={loading}
          >
            Cambiar contraseña
          </Button>
        </Form.Item>
      </Form>

      <Paragraph className="back-message">¿Ya no quieres cambiarla?</Paragraph>
    </div>
  );
};
