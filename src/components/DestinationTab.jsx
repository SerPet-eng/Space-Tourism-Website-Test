import { useState } from 'react';

export default function DestinationTab() {
  const [activeIndex, setActiveIndex] = useState(0);

  const destinations = ['MOON', 'MARS', 'EUROPA', 'TITAN'];

  return (
    <>
      <div className="destination-section">
        <ul className="destination-list">
          {destinations.map((item, index) => (
            <li
              className={`destination-item ${
                activeIndex === index ? 'destination-item-active' : ''
              }`}
              key={index}
              onClick={() => setActiveIndex(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
