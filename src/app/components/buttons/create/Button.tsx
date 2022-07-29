import { FC } from "react";
import { Button as ButtonComponent } from "react-bootstrap";
import { ButtonProps } from "../../../types";
import { useModalContext } from "../../../contexts/ModalContext";

export const Button: FC<ButtonProps> = ({ label }) => {
  const { setIsOpen } = useModalContext();
  const onClick = () => setIsOpen(true);

  return <ButtonComponent onClick={onClick}>{label}</ButtonComponent>;
};

Button.displayName = "CreateButton";
Button.defaultProps = {
  label: "CreateButton",
};
