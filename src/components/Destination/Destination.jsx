import PropTypes from 'prop-types';
import DestinationTab from '../DestinationTab';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useState } from 'react';

export default function Destination({
  img,
  name,
  description,
  distance,
  travel,
}) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
    console.log('Image loaded successfully!');
  };

  return (
    <div className="destination">
      <p className="pages-title">
        <span>01</span>Pick your destination
      </p>
      <div className="destination-content">
        <div className="destination-image-container">
          {!isImageLoaded && <p>Loading image...</p>}
          <LazyLoadImage
            key={name}
            className="destination-image"
            src={img}
            alt={`Image of: ${name}`}
            effect="blur"
            onLoad={handleImageLoad}
          />
        </div>

        <div className="destination-explanation-container">
          <DestinationTab />
          <div className="destination-text">
            <p className="destination-name">{name}</p>
            <p className="destination-description">{description}</p>
          </div>
          <div className="destination-statistics">
            <div className="destination-info">
              <p className="destination-info-title">Avg. Distance</p>
              <p className="destination-info-hero">{distance}</p>
            </div>
            <div className="destination-info">
              <p className="destination-info-title">Est. Travel Time</p>
              <p className="destination-info-hero">{travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Destination.propTypes = {
  img: PropTypes.any.isRequired,
  name: PropTypes.any.isRequired,
  description: PropTypes.any.isRequired,
  distance: PropTypes.any.isRequired,
  travel: PropTypes.any.isRequired,
};
