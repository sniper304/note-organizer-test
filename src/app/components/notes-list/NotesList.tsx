import { FC } from "react";
import { Table } from "react-bootstrap";
import { useNoteContext } from "../../contexts/NoteContext";

export const NotesList: FC = () => {
  const { notes } = useNoteContext();

  if (!notes.length) {
    return <p>There are no notes</p>;
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Content</th>
        </tr>
      </thead>
      <tbody>
        {notes.map((note, index) => {
          return (
            <tr key={index}>
              <th>{note.title}</th>
              <th>{note.date?.toString()}</th>
              <th>{note.content}</th>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
