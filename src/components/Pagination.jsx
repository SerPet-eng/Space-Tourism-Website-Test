import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Pagination() {
  const [activePaginate, setActivePaginate] = useState(0);
  const paginateNumbers = [1, 2, 3];

  const getLinkPath = (index) => {
    switch (index) {
      case 0:
        return '/technology1';
      case 1:
        return '/technology2';
      case 2:
        return '/technology3';
      default:
        return '/technology1';
    }
  };

  return (
    <>
      <div className="pagination">
        <ul className="pagination-container">
          {paginateNumbers.map((item, index) => (
            <>
              <Link
                to={`/technology${getLinkPath(index)}`}
                style={{ textDecoration: 'none' }}
              >
                <li
                  className={`pagination-item ${
                    activePaginate === index ? 'active-paginate' : ''
                  }`}
                  key={index}
                  onClick={() => setActivePaginate(index)}
                >
                  {item}
                </li>
              </Link>
            </>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  );
}
