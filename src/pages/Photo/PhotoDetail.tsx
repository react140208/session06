import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";

export default function PhotoDetail() {
  const navigation = useNavigate();
  const { id } = useParams();
  return (
    <>
      <div>PhotoDetail</div>
      <h1>{id}</h1>
      <Button type="primary" onClick={() => navigation(-1)}>
        برگشت
      </Button>
    </>
  );
}
