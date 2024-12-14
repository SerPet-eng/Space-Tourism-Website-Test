import PropTypes from 'prop-types';

export default function LoadingState({ page }) {
  return (
    <div className="loading-state">
      <p className="loading-state-text">Your {page} is loading...</p>
    </div>
  );
}

LoadingState.propTypes = {
  page: PropTypes.string.isRequired,
};
