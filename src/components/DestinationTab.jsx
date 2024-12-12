import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function DestinationTab() {
  const [activeIndex, setActiveIndex] = useState(0);

  const destinations = ['MOON', 'MARS', 'EUROPA', 'TITAN'];

  const getLinkPath = (index) => {
    switch (index) {
      case 0:
        return '/moon';
      case 1:
        return '/mars';
      case 2:
        return '/europa';
      case 3:
        return '/titan';
      default:
        return '/moon';
    }
  };

  return (
    <>
      <div className="destination-section">
        <ul className="destination-list">
          {destinations.map((item, index) => (
            <>
              <Link
                to={`/destination${getLinkPath(index)}`}
                style={{ textDecoration: 'none' }}
              >
                <li
                  className={`destination-item ${
                    activeIndex === index ? 'destination-item-active' : ''
                  }`}
                  key={index}
                  onClick={() => setActiveIndex(index)}
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
