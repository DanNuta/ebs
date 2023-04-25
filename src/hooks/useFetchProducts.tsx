import React, { useState, useEffect } from 'react';

export const useFetchProducts = (url: string) => {
  const [data, setData] = useState([]);
  const [pendign, setPending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getData();
  }, [url]);

  async function getData() {
    setPending(true);
    try {
      const res: Response = await fetch(url);

      if (!res.ok) {
        setError('Cerere gresita');
        setPending(false);
      }

      const json = await res.json();

      setData((prev) => {
        return json;
      });
      setPending(false);
      setError(null);
    } catch (e: any) {
      setError(e);
      setPending(false);
    }
  }

  return { data, pendign, error };
};
