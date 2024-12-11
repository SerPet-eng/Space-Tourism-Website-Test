import IconNotFound from '../../../assets/image_hubble_telescope.png';

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-hero">
        <p className="not-found-title">404</p>
        <p className="not-found-text">Page Not Found</p>
      </div>

      <div className="not-found-image-container">
        <img
          className="not-found-image"
          src={IconNotFound}
          alt="Image of Hubble Telescope"
        />
      </div>

      <div className="not-found-content">
        <p className="not-found-description">
          Hubble Telescope can see the deepest images of the universe, but not
          this page you are looking for.
        </p>
      </div>
    </div>
  );
}
