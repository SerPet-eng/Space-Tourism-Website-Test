import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8800/api/data');
        setData(response.data);
        console.log('Fetching Data Success');
      } catch (error) {
        setError(error);
        console.log(`Error Fetching Data: ${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(`Fetched Data: ${data}`); // Improved logging

  return { data, loading, error };
}
