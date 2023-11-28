import { Button, InputNumber, Space, Typography } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  decrement,
  increment,
  incrementBy,
  incrementByX,
  reset,
} from "./Counter.slice";
import { useState } from "react";
const { Title } = Typography;

export default function CounterIndex() {
  const counter = useAppSelector((s) => s.counter.value);
  const dispatch = useAppDispatch();
  const [incBy, setIncBy] = useState(10);
  incrementByX({ value: 1, xyz: "abc" });
  return (
    <>
      <Title>{counter}</Title>
      <Button onClick={() => dispatch(increment())}>➕</Button>
      <Button onClick={() => dispatch(decrement())}>➖</Button>
      <Button onClick={() => dispatch(reset())}>Reset</Button>
      <Space.Compact>
        <InputNumber value={incBy} onChange={(x) => setIncBy(x || 0)} />
        <Button type="primary" onClick={() => dispatch(incrementBy(+incBy))}>
          ➕
        </Button>
      </Space.Compact>
    </>
  );
}
