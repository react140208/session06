import { Button } from "antd";
import { useState } from "react";

export default function CounterIndex() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      {counter}
      <Button onClick={() => setCounter(counter + 1)}>➕</Button>
      <Button onClick={() => setCounter(counter - 1)}>➖</Button>
      <Button onClick={() => setCounter(counter + 10)}>➕ 10</Button>
      <Button onClick={() => setCounter(0)}>Reset</Button>
    </>
  );
}
