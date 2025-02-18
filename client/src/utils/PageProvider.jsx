import useFetchData from './useFetchData';
import { createContext, useContext } from 'react';

const PageContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function usePageContext() {
  return useContext(PageContext);
}

// eslint-disable-next-line react/prop-types
export default function PageProvider({ children }) {
  const value = 'it is working!';
  const { data } = useFetchData();

  const destination = data?.destination || [];
  const crew = data?.crew || [];
  const technology = data?.technology || [];

  console.log(`Page Context: ${destination}`);

  return (
    <PageContext.Provider value={{ destination, crew, technology, value }}>
      {children}
    </PageContext.Provider>
  );
}
