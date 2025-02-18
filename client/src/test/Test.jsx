import { useState } from 'react';
import { usePageContext } from '../utils/PageProvider';
import ReactPaginate from 'react-paginate';
// import { Link } from 'react-router-dom';

export default function Test() {
  const { crew } = usePageContext();
  const [currentPage, setCurrentPage] = useState(0);
  const crewPerPage = 1;

  const offset = currentPage * crewPerPage;
  const currentCrew = crew.slice(offset, offset + crewPerPage);
  const pageCount = Math.ceil(crew.length / crewPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // const crewIndex = crew?.findIndex((crew) => {
  //   const crewId = crew.name.toLowerCase();
  //   return crewId === 'douglas hurley';
  // });

  console.log(crew.length);
  return (
    <>
      <h1>Test</h1>
      {currentCrew.map((crew) => (
        <p key={crew.name} style={{ color: 'white' }}>
          {crew.name}
        </p>
      ))}
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName="pagination"
      />
    </>
  );
}
