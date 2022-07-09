import React, { useState } from "react";

export default function AddNote(props) {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (event) => {
    const newText = event.target.value;
    if (newText.length <= 200) {
      setNoteText(newText);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      props.handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type to add a note"
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}
