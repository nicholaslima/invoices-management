import React, {
  FunctionComponent,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { useContext, createContext } from "react";

interface ToogleTypes {
  stateToggle: boolean;
  on(): void;
  off(): void;
  toggle(): void;
}

const UseToogleContext = createContext<ToogleTypes>({} as ToogleTypes);

interface Props {
  children: ReactNode;
}

const UseToogleProvider: React.FC<Props> = ({ children }) => {
  const [stateToggle, setStateToggle] = useState(true);

  const off = useCallback(() => {
    setStateToggle(true);
  }, [setStateToggle]);

  const on = useCallback(() => {
    setStateToggle(false);
  }, [setStateToggle]);

  const toggle = useCallback(() => {
    setStateToggle(!stateToggle);
  }, [stateToggle]);

  return (
    <UseToogleContext.Provider value={{ stateToggle, on, off, toggle }}>
      {children}
    </UseToogleContext.Provider>
  );
};

const useToggle = () => {
  const context = useContext(UseToogleContext);

  return context;
};

export { UseToogleProvider, useToggle };
