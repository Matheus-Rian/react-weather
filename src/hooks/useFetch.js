import { useEffect, useState } from 'react';
import WeatherService from '../services/WeatherService';

export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await WeatherService.get(url);
      setLoading(false);
      setResponse(resp);
    })();
  }, [url]);

  return [loading, response];
}
