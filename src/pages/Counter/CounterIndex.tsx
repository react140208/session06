import { Button } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { decrement, increment, reset } from "./Counter.slice";

export default function CounterIndex() {
  const counter = useAppSelector((s) => s.counter.value);
  const dispatch = useAppDispatch();
  return (
    <>
      {counter}
      <Button onClick={() => dispatch(increment())}>➕</Button>
      <Button onClick={() => dispatch(decrement())}>➖</Button>
      <Button onClick={() => dispatch(increment())}>➕ 10</Button>
      <Button onClick={() => dispatch(reset())}>Reset</Button>
    </>
  );
}
