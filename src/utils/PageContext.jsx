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

  // Ensure data is available before rendering the children
  const destinations = data.destinations || [];
  const crew = data.crew || [];
  const technology = data.technology || []; // If data is still loading, return a loading indicator

  // if (destinations.length > 0 && crew.length > 0 && technology.length > 0) {
  //   console.log('Its Working');
  // } else {
  //   console.log('Loading...');
  // }

  if (loading) {
    return <div>Loading...</div>;
  } // If there's an error, display it
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
