import { createContext, useContext } from "react";

type ContextProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const ModalContext = createContext<ContextProps>({
  isOpen: false,
  setIsOpen: () => {},
});

export const useModalContext = () => useContext(ModalContext);
