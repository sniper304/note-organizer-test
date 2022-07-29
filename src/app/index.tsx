import { NotesContainer } from "./containers/NotesContainer";
import { NotesList } from "./components/notes-list";
import { loadButtons } from "./utils";

export const App = () => {
  const buttonComponents = () => loadButtons();

  return (
    <NotesContainer>
      <div className="d-flex justify-content-between">
        <h3 className="m-0">Note Organizer</h3>
        <div className="buttons-wrapper">
          {buttonComponents().map((Component, index) => {
            return (
              <Component
                key={index}
                label={index === 0 ? "Create" : "Export"}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-3">
        <NotesList />
      </div>
    </NotesContainer>
  );
};
