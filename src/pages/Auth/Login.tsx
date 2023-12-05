import { Button, Form, Input } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loginAction } from "./Auth.slice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export type LoginForm = {
  email: string;
  password: string;
};

export default function Login() {
  const dispatch = useAppDispatch();
  const token = useAppSelector((s) => s.auth.token);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) navigate("/");
  }, [navigate, token]);

  const onFinish = (values: LoginForm) => {
    dispatch(loginAction(values));
    console.log("Success:", values);
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<LoginForm>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item<LoginForm>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
