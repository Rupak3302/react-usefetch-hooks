import { useState, useEffect, useCallback } from "react";

export default function useFetch(url) {
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);

  const fetchData = useCallback(async () => {
    if(!navigator.onLine) {
      setError("No internet connection");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try{
      const res = await fetch(url);

      if(!res.ok){
        throw new Error("Failed to fetch");
      }

      const json = await res.json();
      setData(json);

    }catch(err){
      setError(err.message);
    }
    finally{
      setLoading(false);
    }

  },[url]);

  useEffect(()=>{
    fetchData();
  },[fetchData]);

  return {data, loading, error};
}
