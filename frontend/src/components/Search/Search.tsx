'use client';
import { useContext } from 'react';
import { SearchContext } from '@/app/search/page';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import useDebouncedCallback from '../Services/useDebounceCallback';

function Search ({ placeholder} : { placeholder: string}) {
//     const searchParams = useSearchParams()
//     const pathname = usePathname() // para actualizar la URL
//     const { replace } = useRouter() // método de useRouter
    
// const HandleSearch = (term:string) => {
//     const params = new URLSearchParams(searchParams);
//     if (term) {
//         params.set('query', term) // que me ubique el campo search me traiga el dato
//     } else {
//         params.delete('query') // sino que lo borre de la URL
//     }
//     //generar la URL y que se cambie
//     replace(`${pathname}?${params.toString()}`)
// }



    
    return (
        <form className="max-w-md mx-auto hidden sm:block">   
            <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white ">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input 
                    type="search" 
                    onChange={(event) => {handleSearch(event.target.value)}}
                    defaultValue={searchParams.get('query')?.toString()}
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Keyword...." 
                    required 
                />
                <button 
                    type="submit" 
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Buscar
                </button>
            </div>
        </form>
    );
}

export default Search;




