import { FC, useCallback } from "react";
import { Button as ButtonComponent } from "react-bootstrap";
import { ButtonProps } from "../../../types";
import { useNoteContext } from "../../../contexts/NoteContext";
import { downloadCsv } from "../../../utils";

export const Button: FC<ButtonProps> = ({ label }) => {
  const { notes } = useNoteContext();

  const onClick = useCallback(() => {
    downloadCsv(notes);
  }, [notes]);

  return <ButtonComponent onClick={onClick}>{label}</ButtonComponent>;
};

Button.displayName = "ExportButton";
Button.defaultProps = {
  label: "ExportButton",
};
