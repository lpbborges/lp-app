import React, { createContext, useContext, useState } from 'react';

interface SearchContextData {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchContext = createContext<SearchContextData>({} as SearchContextData);

const SearchProvider: React.FC = ({ children }) => {
  const [query, setQuery] = useState('');

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

function useSearch(): SearchContextData {
  const context = useContext(SearchContext);

  return context;
}

export { SearchProvider, useSearch };
