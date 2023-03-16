import { useState, useEffect } from 'react';

export const useFetch = (url: string) => {

  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((JSON) => {
        setError(JSON.error)
        setData(JSON)
        setLoading(false)
      })
  }, []);

  return { data, loading, error };
};

export function useRandomAvatarCharacterArray() {
  let [randomAvatarArray, setRandomAvatarArray] = useState([]);

  useEffect(() => {

  }, []);

  return [randomAvatarArray];

} 
