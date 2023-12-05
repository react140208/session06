import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";

export default function PhotoDetail() {
  const naigation = useNavigate();
  const { id } = useParams();
  return (
    <>
      <div>PhotoDetail</div>
      <h1>{id}</h1>
      <Button type="primary" onClick={() => naigation(-1)}>
        برگشت
      </Button>
    </>
  );
}
