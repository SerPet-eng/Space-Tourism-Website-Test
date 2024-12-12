import PropTypes from 'prop-types';
import Pagination from '../Pagination';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useState } from 'react';

export default function Technology({
  img_portrait,
  img_landscape,
  name,
  description,
}) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
    console.log('Image successfully load');
  };

  return (
    <div className="technology">
      <p className="pages-title">
        <span>01</span>Space Launch 101
      </p>

      <div className="technology-content">
        <div className="technology-explanation-container">
          <Pagination />
          <div className="technology-text">
            <div className="technology-rank-name">
              <p className="technology-rank">The Terminology...</p>
              <p className="technology-name">{name}</p>
            </div>
            <p className="technology-description">{description}</p>
          </div>
        </div>

        <picture className="technology-image-container">
          <source
            media="(min-width: 561px) and (max-width: 1060px)"
            srcSet={img_landscape}
          />
          <source media="(max-width: 56px)" srcSet={img_portrait} />
          {!isImageLoaded && <p>Loading image...</p>}
          <LazyLoadImage
            key={name}
            className="technology-image"
            src={img_portrait}
            alt={`Image of ${name}`}
            effect="blur"
            onLoad={handleImageLoad}
          />
        </picture>
      </div>
    </div>
  );
}

Technology.propTypes = {
  img_portrait: PropTypes.any.isRequired,
  img_landscape: PropTypes.any.isRequired,
  name: PropTypes.any.isRequired,
  description: PropTypes.any.isRequired,
};
