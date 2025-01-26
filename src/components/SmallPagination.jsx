import { useState } from 'react';
import { Link, Outlet } from 'react-router';

export default function SmallPagination() {
  const [activeIndex, setActiveIndex] = useState(0);

  const smallPagination = ['crew1', 'crew2', 'crew3', 'crew4'];

  const getLinkPath = (index) => {
    switch (index) {
      case 0:
        return '/crew1';
      case 1:
        return '/crew2';
      case 2:
        return '/crew3';
      case 3:
        return '/crew4';
      default:
        return '/crew1';
    }
  };

  return (
    <>
      <div className="small-pagination">
        <ul className="small-pagination-list">
          {smallPagination.map((item, index) => (
            <Link
              to={`/crew${getLinkPath(index)}`}
              style={{ textDecoration: 'none', color: 'transparent' }}
              key={index}
            >
              <li
                className={`small-pagination-item ${
                  activeIndex === index ? 'small-pagination-active' : ''
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {item}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  );
}
