'use client'

import { useEffect, useState } from "react";

const useFetch =  (url: string) => {
    const [data, setData] = useState<any>(null);
    // const [isPending, setIsPending] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const dataNew = async()=>{
        const listdata = await fetch(url)
        const data = await listdata.json()
        if (!data) setError("No hay data")
        else setData(data)
    }

    useEffect(() => {
        // const abortCont = new AbortController();
        dataNew()
        // setTimeout(() => {
            // fetch(url, { signal: abortCont.signal })
            // fetch(url)
            // .then(res => {
            //     if (!res.ok) { 
            //         throw new Error('could not fetch the data');
            //     }
            //     return res.json();
            // })
            // .then(data => { 
            //     setData(data);
            //     console.log(data);
            //     setIsPending(false);
            //     setError(null);
            // })
            // .catch(err => {
            //     if (err.name === 'AbortError') { 
            //         console.log('fetch aborted');
            //     } else {
            //         setIsPending(false);
            //         setError(err.message);
            //     }
            
            }, []);
        // }, 1000);

        // return () => abortCont.abort();
    
 
    return { data, error };
};

export default useFetch;
