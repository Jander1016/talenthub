// import Search from '@/components/Search/Search';
// import React from 'react';

// function Page() {
//   return (
//     <div>
//         <Search placeholder={'Ingrese su búsqueda aquí'} />
//     </div>
//   );
// }

// export default Page;



import React, { createContext, useState, ReactNode } from 'react';

interface SearchContextType {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  }
export const SearchContext = createContext<SearchContextType>({
    searchTerm: '',
    setSearchTerm: () => {}
  });
  
  interface SearchProviderProps {
    children: ReactNode;
  }

export const SearchProvider = ({ children }) => {
 const [searchTerm, setSearchTerm] = useState('');

 return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
 );
};