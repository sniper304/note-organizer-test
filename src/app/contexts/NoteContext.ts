import { createContext, useContext } from "react";
import { Note } from "../types";

type ContextProps = {
  notes: Note[];
  addNote: (note: Note) => void;
};

export const NoteContext = createContext<ContextProps>({
  notes: [],
  addNote: () => {},
});

export const useNoteContext = () => useContext(NoteContext);
