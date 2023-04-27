import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    fetchGifs("YOUR_API_KEY");
  }, []);

  const fetchGifs = (apiKey) => {
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=3`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const gifsData = data.data;
        setGifs(gifsData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSubmit = (searchTerm) => {
    fetchGifs("YOUR_API_KEY");
  };

  return (
    <div>
      <GifSearch onSubmit={handleSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
