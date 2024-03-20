'use client'

import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

type Data<T> =T | null

interface FetchResult<T> {
    data: Data<T>;
    isLoading: boolean;
    error: string | null;
}

export const useFetchApi = <T>(url: string): FetchResult<T>=> {
    const [data, setData] = useState<Data<T>>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true)

        axios
        .get(url, {
            signal: controller.signal,
            
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
            }

        } )
        .then((response:AxiosResponse<Data<T>>) => {
            setData(response.data)
        })
        .catch((error:any) => setError(error.message))
        .finally(() => setIsLoading(false));

        return () => controller.abort();
    }, [url]);

    return { data, isLoading, error };
};

// export default useFetchApi;
