import { useState, useEffect } from 'react';

export const useFetchProducts = (url: string) => {
  const [data, setData] = useState<[]>([]);
  const [pendign, setPending] = useState(false);
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

      setData(json);
      setPending(false);
      setError(null);
    } catch (e: any) {
      setError(e);
      setPending(false);
    }
  }

  return { data, pendign, error };
};
