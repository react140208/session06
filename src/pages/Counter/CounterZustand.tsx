import { Button, InputNumber, Space, Typography } from "antd";
import { useState } from "react";
import { useCounterStore } from "./CounterStore";
const { Title } = Typography;

export default function CounterZustand() {
  const [incBy, setIncBy] = useState(10);
  const { count, increment, decrement, reset, incrementBy } = useCounterStore();

  return (
    <>
      <Title>{count}</Title>
      <Button onClick={() => increment()}>➕</Button>
      <Button onClick={() => decrement()}>➖</Button>
      <Button onClick={() => reset()}>Reset</Button>
      <Space.Compact>
        <InputNumber value={incBy} onChange={(x) => setIncBy(x || 0)} />
        <Button type="primary" onClick={() => incrementBy(+incBy)}>
          ➕
        </Button>
      </Space.Compact>
    </>
  );
}
