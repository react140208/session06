import { createContext } from "react";

interface AppContextType {
  color: string;
  setColor: (c: string) => void;
}

export const AppContext = createContext<AppContextType>({
  color: "",
  setColor: () => {},
});
