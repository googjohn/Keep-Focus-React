import { useState, useEffect, useCallback, useRef } from "react";

export function useFetch(url) {
  const [quotes, setQuotes] = useState([])

  // unnecessary but if we want manual fetch or refetch then 
  // best to always have the current controller to abort every fetch
  const controller = useRef(null);

  const fetchData = useCallback(async () => {

    if (controller.current) {
      controller.current.abort()
    }

    controller.current = new AbortController();
    const signal = controller.current.signal;

    try {
      const response = await fetch(url, { signal })
      if (!response.ok) {
        throw new Error(`HTTPS error. ${response.status}`)
      }

      const data = await response.json();
      const quotesArray = data.map(quote => {
        return {
          author: quote.a,
          charLen: quote.c,
          html: quote.h,
          quote: quote.q
        }
      })
      setQuotes(quotesArray)
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Fetch aborted (expected behavior cleanup).')
      } else {
        console.error('Fetching falied.', error)
      }
    }
  }, [url])

  useEffect(() => {
    fetchData();

    return () => {
      if (controller.current) {
        controller.current.abort();
      }
    }
  }, [fetchData])

  return { quotes, setQuotes, refetch: fetchData }

}