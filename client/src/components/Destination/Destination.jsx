import { usePageContext } from '../../utils/PageProvider';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

export default function Destination() {
  const { destination } = usePageContext();
  const [currentPage, setCurrentPage] = useState(0);
  const itemPerPage = 1;

  const offset = currentPage * itemPerPage;
  const currentDestination = destination.slice(offset, offset + itemPerPage);
  const pageCount = Math.ceil(destination.length / itemPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className='destination' style={{ color: 'white' }}>
      <h1>0{currentPage} PICK YOUR DESTINATION</h1>
      <div>
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={handlePageChange}
          pageClassName="destination-page"
          pageLinkClassName="destination-page-link"
          previousLabel=""
          nextLabel=""
          renderOnZeroPageCount={null}
          pageLabelBuilder={(page) => {
            // Use the offset to get the correct item name
            const itemIndex = page - 1; // Since itemPerPage is 1, page corresponds directly to the index
            return destination[itemIndex]?.name || `Page ${itemIndex + 1}`;
          }}
        />
        {currentDestination.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.images.png} alt={`Image of ${item.name}`} />
              <div className="destination-info">
                <p className="destination-name">{item.name}</p>
                <p className="destination-description">{item.description}</p>
                <hr />
                <div className="destination-details">
                  <div className="destination-details-item">
                    <p>AVG. DISTANCE</p>
                    <p>{item.distance}</p>
                  </div>
                  <div className="destination-details-item">
                    <p>EST. TRAVEL TIME</p>
                    <p>{item.travel}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
