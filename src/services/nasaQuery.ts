import { useEffect } from 'react';
import { 
  useQuery, 
  useQueryClient,
  QueryClient,
  QueryClientProvider, 
} from '@tanstack/react-query';
import { IPictureOfTheDay } from '../models/models';

interface Props{
  nasaUrl: string;
  setPictureOfTheDay: React.Dispatch<React.SetStateAction<IPictureOfTheDay | undefined>>;
}
type QueryKey = ['pictureOfTheDay'];

const usePictureOfTheDay: React.FC<Props> = ({ nasaUrl, setPictureOfTheDay}) => {
  const queryClient = useQueryClient();

  const fetchPictureOfTheDay = async (): Promise<IPictureOfTheDay> => {
    const response = await fetch(`${nasaUrl}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  };
  
  const { data: pictureOfTheDay, isLoading } = useQuery<IPictureOfTheDay>(
    ['pictureOfTheDay'],
    fetchPictureOfTheDay,
    {
      refetchInterval: 24 * 60 * 60 * 1000, // Refetch once per day
      retry: 3, // Retry up to 3 times if request fails
      cacheTime: 24 * 60 * 60 * 1000, // Cache for 24 hours
      onError: (error) => {
        console.error(error);
      },
    }
  );

  useEffect(() => {
    if (!isLoading && pictureOfTheDay) {
      setPictureOfTheDay(pictureOfTheDay);
    }
  }, [isLoading, pictureOfTheDay, setPictureOfTheDay]);

  return null;

  };

  export default usePictureOfTheDay;