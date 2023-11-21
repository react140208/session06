import { useState } from "react";
import "./App.css";
import { AppContext } from "./appContext";
import AppLayout from "./components/AppLayout";

function App() {
  const [color, setColor] = useState("red");
  return (
    <div dir="rtl">
      <AppContext.Provider value={{ color, setColor }}>
        <AppLayout></AppLayout>
      </AppContext.Provider>
    </div>
  );
}

export default App;
