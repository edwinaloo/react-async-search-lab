import React, { useState } from "react";

function GifSearch({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search for GIFs..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default GifSearch;
