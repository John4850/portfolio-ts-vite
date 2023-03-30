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

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
  
    window.addEventListener('resize', handleWindowResize);
  
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return windowSize;
}

export function useIntersectionObserver(ref: React.RefObject<any>){
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  const observer = new IntersectionObserver(([entry])=> setIntersecting(entry.isIntersecting));

  useEffect(()=>{
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  },[])

  return isIntersecting;
}
