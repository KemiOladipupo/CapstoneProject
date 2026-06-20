import { useState } from "react";

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const BASE_URL = "https://api.unsplash.com";

export function useUnsplash() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPhotos = async (query) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${BASE_URL}/search/photos?query=${query}&per_page=30`,
        {
          headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch images from Unsplash");
      }

      const data = await response.json();

      setLoading(false);
      return data.results;
    } catch (err) {
      setError(err.message);
      setLoading(false);
      return [];
    }
  };

  return { fetchPhotos, loading, error };
}