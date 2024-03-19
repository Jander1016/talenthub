'use client'

import { useEffect, useState } from "react";

const useFetchApi =  (url: string) => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const dataNew = async()=>{
        const listdata = await fetch(url)
        const data = await listdata.json()
        if (!data) setError("No hay data")
        else setData(data)
    }

    useEffect(() => {
        
        dataNew()
                
            // eslint-disable-next-line react-hooks/exhaustive-deps
            }, []);
      
    
 
    return { data, error };
};

export default useFetchApi;
