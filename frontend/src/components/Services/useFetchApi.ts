'use client'

import { useEffect, useState } from "react";

const useFetch =  (url: string) => {
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
                
            }, []);
      
    
 
    return { data, error };
};

export default useFetch;
