import { useState, useEffect } from "react";

export function useFetchData(url) {
  if (!url) {
    console.error("URL is required");
  }

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url]);

  return data;
}
