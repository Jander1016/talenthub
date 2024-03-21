'use client'

// import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

// type Data<T> =T | null

// interface FetchResult<T> {
//     data: Data<T>;
//     isLoading: boolean;
//     error: string | null;
// }

// export const useFetchApiApi = <T>(url: string): FetchResult<T>=> {
//     const [data, setData] = useState<Data<T>>(null);
//     const [isLoading, setIsLoading] = useState<boolean>(false);
//     const [error, setError] = useState<string | null>(null);

const useFetchApi = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const dataNew = async () => {
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
