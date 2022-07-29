import { Container } from "react-bootstrap";
import { BaseComponentProps } from "../types";
import { NotesProvider, ModalProvider } from "../providers";
import { Modal } from "../components/modal";

export const NotesContainer: BaseComponentProps = ({ children }) => {
  return (
    <NotesProvider>
      <ModalProvider>
        <Container className="m-5">
          <div className="notes-container-wrapper">{children}</div>
        </Container>
        <Modal />
      </ModalProvider>
    </NotesProvider>
  );
};
