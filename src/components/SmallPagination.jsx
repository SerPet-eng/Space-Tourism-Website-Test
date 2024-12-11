import { useState } from 'react';

export default function SmallPagination() {
  const [activeIndex, setActiveIndex] = useState(0);

  const smallPagination = ['', '', '', ''];

  return (
    <>
      <div className="small-pagination">
        <ul className="small-pagination-list">
          {smallPagination.map((item, index) => (
            <li
              key={index}
              className={`small-pagination-item ${
                activeIndex === index ? 'small-pagination-active' : ''
              }`}
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
