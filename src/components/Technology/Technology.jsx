import PropTypes from 'prop-types';
import Pagination from '../Pagination';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useEffect, useState } from 'react';

export default function Technology({
  img_portrait,
  img_landscape,
  name,
  description,
}) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [currentImage, setCurrentImage] = useState(img_portrait);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  useEffect(() => {
    const updateImage = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 650) {
        setCurrentImage(img_portrait);
      } else if (screenWidth <= 1060) {
        setCurrentImage(img_landscape);
      } else {
        setCurrentImage(img_portrait);
      }
    };

    updateImage();

    window.addEventListener('resize', updateImage);

    return () => window.removeEventListener('resize', updateImage);
  }, [img_portrait, img_landscape]);

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

        <div
          className={`technology-image-container ${
            !isImageLoaded ? 'placeholder' : ''
          }`}
        >
          <LazyLoadImage
            key={name}
            className="technology-image"
            src={currentImage}
            alt={`Image of ${name}`}
            effect="blur"
            onLoad={handleImageLoad}
          />
        </div>
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
