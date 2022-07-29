import { useCallback, useState } from "react";
import { Modal as ModalComponent, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useModalContext } from "../../contexts/ModalContext";
import { useNoteContext } from "../../contexts/NoteContext";
import { Note } from "../../types";

export const Modal = () => {
  const { isOpen, setIsOpen } = useModalContext();
  const [defaultValues] = useState<Partial<Note>>({
    title: "",
    date: null,
    content: "",
  });

  const { addNote } = useNoteContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Note>({ defaultValues });

  const handleClose = useCallback(() => setIsOpen(false), [setIsOpen]);

  const onSubmit = (values: Note) => {
    addNote(values);
    handleClose();

    setTimeout(() => {
      reset(defaultValues);
    }, 0);
  };

  const requiredMessageComponent = <span>This field is required</span>;

  return (
    <ModalComponent show={isOpen} onHide={handleClose}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ModalComponent.Header closeButton>
          <ModalComponent.Title>Add new note</ModalComponent.Title>
        </ModalComponent.Header>

        <ModalComponent.Body>
          <Form.Group controlId="title" className="mb-2">
            <Form.Control
              {...register("title", { required: true })}
              name="title"
              isInvalid={!!errors.title}
              placeholder="Title"
            />

            <Form.Control.Feedback type="invalid">
              {errors.title && requiredMessageComponent}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="date" className="mb-2">
            <Form.Control
              {...register("date", { required: true })}
              name="date"
              isInvalid={!!errors.date}
              type="date"
            />

            <Form.Control.Feedback type="invalid">
              {errors.date && requiredMessageComponent}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="content">
            <Form.Control
              {...register("content", { required: true })}
              name="content"
              isInvalid={!!errors.content}
              type="content"
              placeholder="Content"
              as="textarea"
            />

            <Form.Control.Feedback type="invalid">
              {errors.content && requiredMessageComponent}
            </Form.Control.Feedback>
          </Form.Group>
        </ModalComponent.Body>

        <ModalComponent.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </ModalComponent.Footer>
      </Form>
    </ModalComponent>
  );
};
