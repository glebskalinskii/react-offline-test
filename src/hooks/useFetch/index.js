import { useState, useEffect } from 'react';

const defaultOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export default function useFetch(url, options) {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  function fetchUrl() {
    fetch(url, {...defaultOptions, ...options})
      .then(handleErrors)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        setError(true);
      });

  }

  useEffect(() => {
    fetchUrl();
  }, []);

  return {data, loading, error};
}
