import { useState, useEffect } from 'react';

const avatarApiAddress = "https://last-airbender-api.fly.dev/api/v1/characters";

export const useFetch = (url: string): object => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setError(data.error)
        setData(data.joke)
        setLoading(false)
      })
  }, [url]);

  return { data, loading, error };
};

export default useFetch;

export function useRandomAvatarCharacterArray() {
  let [randomAvatarArray, setRandomAvatarArray] = useState([]);

  useEffect(() => {

  }, []);

  return [randomAvatarArray];

} 
