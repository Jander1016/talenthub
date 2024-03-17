import Search from '@/components/Search/index';
import React from 'react';

function SearchPage() {
  return (
    <div className="mt-30">
        <Search placeholder={''} />
    </div>
  );
}

export default SearchPage;



// import React, { createContext, useState, ReactNode } from 'react';

// interface SearchContextType {
//     searchTerm: string;
//     setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
//   }
// export const SearchContext = createContext<SearchContextType>({
//     searchTerm: '',
//     setSearchTerm: () => {}
//   });
  
//   interface SearchProviderProps {
//     children: ReactNode;
//   }

// export const SearchProvider = ({ children }) => {
//  const [searchTerm, setSearchTerm] = useState('');

//  return (
//     <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
//       {children}
//     </SearchContext.Provider>
//  );
// };