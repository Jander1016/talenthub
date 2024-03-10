'use client'

import { useEffect, useState } from "react";

const useFetch = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [isPending, setIsPending] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) { 
                    throw new Error('could not fetch the data');
                }
                return res.json();
            })
            .then(data => { 
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') { 
                    console.log('fetch aborted');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            });
        }, 1000);

        return () => abortCont.abort();
    }, [url]);
 
    return { data, isPending, error };
};

export default useFetch;


