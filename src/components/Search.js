import React from "react";
import { MdSearch } from "react-icons/md";

export default function Search(props) {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        type="text"
        placeholder="type to seach..."
        onChange={(event) => props.handleSearchNote(event.target.value)}
      />
    </div>
  );
}
