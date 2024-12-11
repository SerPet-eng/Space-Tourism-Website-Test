import { useState } from 'react';

export default function Pagination() {
  const [activePaginate, setActivePaginate] = useState(0);
  const paginateNumbers = [1, 2, 3];

  return (
    <>
      <div className="pagination">
        <ul className="pagination-container">
          {paginateNumbers.map((item, index) => (
            <li
              className={`pagination-item ${
                activePaginate === index ? 'active-paginate' : ''
              }`}
              key={index}
              onClick={() => setActivePaginate(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
