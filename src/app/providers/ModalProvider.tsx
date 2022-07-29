import { useState } from "react";
import { BaseComponentProps } from "../types";
import { ModalContext } from "../contexts/ModalContext";

export const ModalProvider: BaseComponentProps = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
