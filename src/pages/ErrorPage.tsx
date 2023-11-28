import { Button, Result } from "antd";
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as any;
  const naigation = useNavigate();

  return (
    <Result
      status={error.status}
      title={error.statusText}
      subTitle={error.message}
      extra={
        <Button type="primary" onClick={() => naigation("/")}>
          صفحه اصلی
        </Button>
      }
    />
  );
}
