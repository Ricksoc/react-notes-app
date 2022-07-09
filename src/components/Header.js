import React from "react";

export default function Header(props) {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button className="save" onClick={props.handleToggleDarkMode}>
        Toggle Mode
      </button>
    </div>
  );
}
