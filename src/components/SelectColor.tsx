import React, { useContext, useRef } from "react";
import { AppContext } from "../appContext";

export default function SelectColor() {
  const selectRef = useRef<HTMLSelectElement>(null);
  const { setColor } = useContext(AppContext);
  const onChnage = () => {
    if (selectRef.current) {
      // document.querySelector('select')?.style.color = 'red';
      selectRef.current.style.color = selectRef.current.value;
      setColor(selectRef.current.value);
    }
  };
  return (
    <select ref={selectRef} onChange={onChnage}>
      <option value="red">red</option>
      <option value="blue">blue</option>
      <option value="green">green</option>
    </select>
  );
}
