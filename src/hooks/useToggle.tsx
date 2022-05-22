import React, { FunctionComponent, ReactNode, useMemo, useState } from "react";
import { useContext, createContext } from "react";

interface ToogleTypes {
  stateToggle: boolean;
  HandlersToggle: HandlersType;
}

interface HandlersType {
  on(): void;
  off(): void;
  toggle(): void;
}

const UseToogleContext = createContext<ToogleTypes>({} as ToogleTypes);

interface Props {
  children: ReactNode;
}

const UseToogleProvider: React.FC<Props> = ({ children }) => {
  const [stateToggle, setStateToggle] = useState(false);

  const HandlersToggle = useMemo(
    () => ({
      on: () => {
        setStateToggle(true);
      },
      off: () => {
        setStateToggle(false);
      },
      toggle: () => {
        setStateToggle(!stateToggle);
      },
    }),
    [stateToggle, setStateToggle]
  );

  return (
    <UseToogleContext.Provider value={{ stateToggle, HandlersToggle }}>
      {children}
    </UseToogleContext.Provider>
  );
};

const useToggle = () => {
  const context = useContext(UseToogleContext);

  return context;
};

export { UseToogleProvider, useToggle };
