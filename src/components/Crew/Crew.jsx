import PropTypes from 'prop-types';
import SmallPagination from '../SmallPagination';

export default function Crew({ img, name, role, bio }) {
  return (
    <div className="crew">
      <p className="pages-title">
        <span>01</span>Meet your crew
      </p>

      <div className="crew-content">
        <div className="crew-explanation-container">
          <div className="crew-text">
            <div className="crew-rank-name">
              <p className="crew-rank">{role}</p>
              <p className="crew-name">{name}</p>
            </div>

            <p className="crew-bio">{bio}</p>
          </div>
          <SmallPagination />
        </div>

        <div className="crew-image-container">
          <img className="crew-image" src={img} alt={`Image of ${name}`} />
        </div>
      </div>
    </div>
  );
}

Crew.propTypes = {
  img: PropTypes.any.isRequired,
  name: PropTypes.any.isRequired,
  role: PropTypes.any.isRequired,
  bio: PropTypes.any.isRequired,
};
