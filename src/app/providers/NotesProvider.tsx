import { useCallback, useState } from "react";
import { BaseComponentProps, Note } from "../types";
import { NoteContext } from "../contexts/NoteContext";

export const NotesProvider: BaseComponentProps = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = useCallback(
    (note: Note) => {
      setNotes([...notes, note]);
    },
    [notes, setNotes]
  );

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
