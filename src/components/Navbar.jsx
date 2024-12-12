import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/logo.svg';
import IconHamburger from '../../assets/icons/icon-hamburger.svg';
import IconClose from '../../assets/icons/icon-close.svg';

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sideBarClicked, setSideBarClicked] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const navItems = ['00 HOME', '01 DESTINATION', '02 CREW', '03 TECHNOLOGY'];
  const mobileWidth = 650;

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSideBar = () => {
    setSideBarClicked((prevClicked) => !prevClicked);
  };

  const getLinkPath = (index) => {
    switch (index) {
      case 0:
        return '/';
      case 1:
        return '/destination';
      case 2:
        return 'crew';
      case 3:
        return 'technology';
      default:
        return '/';
    }
  };

  return (
    <>
      <div className="app">
        <nav className="nav">
          <div className="nav-hero">
            <img src={Logo} alt="Nav Logo" className="nav-logo" />
            <div className="nav-line"></div>
            <img
              src={IconHamburger}
              alt="Icon Hamburger"
              className={`nav-hamburger ${sideBarClicked ? 'hide' : ''}`}
              onClick={toggleSideBar}
            />
          </div>

          <ul
            className={`nav-menu ${
              windowSize.width <= mobileWidth
                ? sideBarClicked
                  ? 'open'
                  : 'close'
                : ''
            }`}
          >
            <img
              src={IconClose}
              alt="Icon for close"
              className="nav-menu-close"
              onClick={toggleSideBar}
            />
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`nav-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <Link
                  to={getLinkPath(index)}
                  style={{ textDecoration: 'none' }}
                >
                  <p className="nav-item-text">{item}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
