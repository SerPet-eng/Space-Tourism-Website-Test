import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useFetchData(url) {
  const [data, setData] = useState({
    destinations: [],
    crew: [],
    technology: [],
  });
  const [errors, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        const data = await response.data;
        setData({
          destinations: data.destinations,
          crew: data.crew,
          technology: data.technology,
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, errors, loading };
}
