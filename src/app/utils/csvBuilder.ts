import { Note } from "../types";

const notesToCsv = (notes: Note[]) => {
  return [
    ["Title", "Date", "Content"],
    ...notes.map((note) => [note.title, note.date?.toString(), note.content]),
  ];
};

const generateCsvContent = (notes: Note[]) => {
  const notesArray = notesToCsv(notes);

  const separator: string = ";";

  return String(
    notesArray.map((columns) => columns.join(separator)).join("\n")
  );
};

const getBlobUrlByContent = (content: string) => {
  const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
  return URL.createObjectURL(blob);
};

const downloadBlobByUrl = (url: string) => {
  const link = document.createElement("a");

  link.setAttribute("href", url);
  link.setAttribute("download", "Notes.csv");
  link.style.visibility = "hidden";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};

export const downloadCsv = async (notes: Note[]) => {
  downloadBlobByUrl(getBlobUrlByContent(generateCsvContent(notes)));
};
