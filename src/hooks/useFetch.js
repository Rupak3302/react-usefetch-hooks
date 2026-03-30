import { useState, useEffect, useCallback } from "react";

// Custom hook for fetching data from an API
  const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

// Fetch function using useCallback 
  const fetchData = useCallback(async () => {

    try{
      setLoading(true);
      setError(null);

      const res = await fetch(url);

      if(!res.ok){
        throw new Error("Failed to fetch");
      }

      const json = await res.json();
      setData(json);

    } catch(err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  //Fetch data when URL changes
  useEffect(()=>{
    fetchData();
  },[fetchData]);

  return {data, loading, error};
};

export default useFetch;