import { useEffect, useState } from "react";

const Fetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => { 
    const abortCont = new AbortController();

    fetch(url.replace("http://", "https://"), { signal: abortCont.signal })
      .then((response) => {
        if (!response.ok) {
          throw Error("Please Reload Page, There's An Error Fetching API");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('No fetch');
        } else {
          setError(error.message);
          setLoading(false);
        }
      });

    return () => abortCont.abort();
  }, [url]);

  return { data, loading, error };
};

export default Fetch;
