import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm) {
      fetchGifs();
    }
  }, [searchTerm]);

  const fetchGifs = async () => {
    try {
      const apiKey = "YOUR_API_KEY";
      const url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&rating=g`;
      const response = await fetch(url);
      const data = await response.json();

      const gifsData = data.data.slice(0, 3);
      setGifs(gifsData);
    } catch (error) {
      console.error("Error fetching GIFs:", error);
    }
  };

  const handleSearchSubmit = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <GifSearch onSubmit={handleSearchSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;

