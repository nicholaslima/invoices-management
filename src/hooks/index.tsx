import { ReactNode } from "react";
import { UseToogleProvider } from "./useToggle";

interface Props {
  children: ReactNode;
}

export const Provider: React.FC<Props> = ({ children }) => {
  return <UseToogleProvider>{children}</UseToogleProvider>;
};
