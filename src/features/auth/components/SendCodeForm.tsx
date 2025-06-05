import React, { useRef } from "react";
import { Button, Form, Input, Space } from "antd";
import { Formik, Form as FormikForm } from "formik";
import type { InputRef } from "antd";
import type { FormikHelpers } from "formik";
import * as Yup from "yup";

const OTP_LENGTH = 6;

type FormValues = {
  user_code: string;
};

const validationSchema = Yup.object({
  user_code: Yup.string()
    .length(OTP_LENGTH, "El código debe tener 6 dígitos.")
    .required("El código de verificación es requerido."),
});

export const SendCodeForm: React.FC = () => {
  const inputsRef = useRef<Array<InputRef | null>>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    values: string,
    setFieldValue: FormikHelpers<FormValues>["setFieldValue"]
  ) => {
    const { value } = e.target;
    if (!/^\d?$/.test(value)) return;

    const otpArray = values.split("");
    otpArray[index] = value;
    const newValue = otpArray.join("").padEnd(OTP_LENGTH, "");

    setFieldValue("user_code", newValue);

    if (value && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
    values: string,
    setFieldValue: FormikHelpers<FormValues>["setFieldValue"]
  ) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      const otpArray = values.split("");
      otpArray[index - 1] = "";
      const newValue = otpArray.join("").padEnd(OTP_LENGTH, "");
      setFieldValue("user_code", newValue);
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (values: FormValues) => {
    console.log(values);
  };

  return (
    <Formik<FormValues>
      initialValues={{ user_code: "".padEnd(OTP_LENGTH, "") }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, setFieldValue, handleBlur }) => (
        <FormikForm autoComplete="off">
          <div style={{ marginBottom: 24 }}>
            <label
              style={{ display: "block", marginBottom: 24, color: "#888" }}
            >
              Código de verificación
            </label>

            <Space
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              {Array.from({ length: OTP_LENGTH }).map((_, index) => (
                <Input
                  key={index}
                  maxLength={1}
                  style={{ width: 40, height: 40, textAlign: "center" }}
                  value={values.user_code[index] || ""}
                  onChange={(e) =>
                    handleInputChange(e, index, values.user_code, setFieldValue)
                  }
                  onKeyDown={(e) =>
                    handleKeyDown(e, index, values.user_code, setFieldValue)
                  }
                  onBlur={handleBlur}
                  name={`user_code_${index}`}
                  ref={(el) => {
                    inputsRef.current[index] = el;
                  }}
                />
              ))}
            </Space>

            {touched.user_code && errors.user_code && (
              <div style={{ color: "#FF4D4F", marginTop: 24 }}>
                {errors.user_code}
              </div>
            )}
          </div>

          <Form.Item style={{ marginTop: 32 }}>
            <Button
              block
              type="primary"
              htmlType="submit"
            >
              Verificar código
            </Button>
          </Form.Item>
        </FormikForm>
      )}
    </Formik>
  );
};
