import { Button } from "antd";
import { useState } from "react";

export default function CounterIndex() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Button onClick={() => setCounter(counter + 1)}>➕</Button>
      {counter}
      <Button onClick={() => setCounter(counter - 1)}>➖</Button>
    </>
  );
}
