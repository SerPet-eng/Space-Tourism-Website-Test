/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react';
import useFetchData from './useFetchData';

const PageContextProvider = createContext();

export function usePageContext() {
  return useContext(PageContextProvider);
}

// eslint-disable-next-line react/prop-types
export default function PageContext({ children }) {
  const { data, errors, loading } = useFetchData('../../public/data.json');

  const destinations = data.destinations || [];
  const crew = data.crew || [];
  const technology = data.technology || [];

  if (loading) {
    return <div>Loading...</div>;
  }
  if (errors) {
    return <div>Error: {errors.message}</div>;
  }

  const values = {
    destinations,
    crew,
    technology,
    errors,
    loading,
  };

  return (
    <PageContextProvider.Provider value={values}>
      {children}
    </PageContextProvider.Provider>
  );
}
