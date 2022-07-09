import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

export default function NotesList(props) {
  return (
    <div className="notes-list">
      {props.notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={() => props.handleDeleteNote(note.id)}
        />
      ))}
      <AddNote handleAddNote={props.handleAddNote} />
    </div>
  );
}
