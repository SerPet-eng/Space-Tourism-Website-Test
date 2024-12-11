import PropTypes from 'prop-types';
import Pagination from '../Pagination';

export default function Technology({
  img_portrait,
  img_landscape,
  name,
  description,
}) {
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
          <source media="(max-width: 1060px)" srcSet={img_landscape} />
          <img
            className="technology-image"
            src={img_portrait}
            alt={`Image of ${name}`}
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
