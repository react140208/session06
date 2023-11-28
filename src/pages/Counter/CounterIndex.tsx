import { Button, InputNumber, Space, Typography } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { decrement, increment, reset } from "./Counter.slice";
const { Title } = Typography;

export default function CounterIndex() {
  const counter = useAppSelector((s) => s.counter.value);
  const dispatch = useAppDispatch();
  return (
    <>
      <Title>{counter}</Title>
      <Button onClick={() => dispatch(increment())}>➕</Button>
      <Button onClick={() => dispatch(decrement())}>➖</Button>
      <Button onClick={() => dispatch(reset())}>Reset</Button>
      <Space.Compact>
        <InputNumber defaultValue="10" />
        <Button type="primary">➕</Button>
      </Space.Compact>
    </>
  );
}
