import { useEffect, useState } from 'react';
import WeatherService from '../services/WeatherService';

export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const resp = await WeatherService.get(url);
        setResponse(resp);
      } catch (err) {
        setError(new Error(err));
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return [loading, response, error];
}
