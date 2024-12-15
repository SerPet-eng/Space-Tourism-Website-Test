import { useEffect, useState } from 'react';

import HomeBackgroundDesktop from '../../assets/home/background-home-desktop.jpg';
import HomeBackgroundTablet from '../../assets/home/background-home-tablet.jpg';
import HomeBackgroundMobile from '../../assets/home/background-home-mobile.jpg';

import DestinationBackgroundDesktop from '../../assets/destination/backgrounds/background-destination-desktop.jpg';
import DestinationBackgroundTablet from '../../assets/destination/backgrounds/background-destination-tablet.jpg';
import DestinationBackgroundMobile from '../../assets/destination/backgrounds/background-destination-mobile.jpg';

import CrewBackgroundDesktop from '../../assets/crew/backgrounds/background-crew-desktop.jpg';
import CrewBackgroundTablet from '../../assets/crew/backgrounds/background-crew-tablet.jpg';
import CrewBackgroundMobile from '../../assets/crew/backgrounds/background-crew-mobile.jpg';

import TechnologyBackgroundDesktop from '../../assets/technology/backgrounds/background-technology-desktop.jpg';
import TechnologyBackgroundTablet from '../../assets/technology/backgrounds/background-technology-tablet.jpg';
import TechnologyBackgroundMobile from '../../assets/technology/backgrounds/background-technology-mobile.jpg';
import { useLocation } from 'react-router-dom';

export default function useBackgroundImage() {
  const location = useLocation();
  const [currentImage, setCurrentImage] = useState({
    currentHomeImage: HomeBackgroundDesktop,
    currentDestinationImage: DestinationBackgroundDesktop,
    currentCrewImage: CrewBackgroundDesktop,
    currentTechnologyImage: TechnologyBackgroundDesktop,
  });

  useEffect(() => {
    const updateWidth = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 650) {
        setCurrentImage((prevCurrentImage) => ({
          ...prevCurrentImage,
          currentHomeImage: HomeBackgroundMobile,
          currentDestinationImage: DestinationBackgroundMobile,
          currentCrewImage: CrewBackgroundMobile,
          currentTechnologyImage: TechnologyBackgroundMobile,
        }));
      } else if (screenWidth <= 1060) {
        setCurrentImage((prevCurrentImage) => ({
          ...prevCurrentImage,
          currentHomeImage: HomeBackgroundTablet,
          currentDestinationImage: DestinationBackgroundTablet,
          currentCrewImage: CrewBackgroundTablet,
          currentTechnologyImage: TechnologyBackgroundTablet,
        }));
      } else {
        setCurrentImage((prevCurrentImage) => ({
          ...prevCurrentImage,
          currentHomeImage: HomeBackgroundDesktop,
          currentDestinationImage: DestinationBackgroundDesktop,
          currentCrewImage: CrewBackgroundDesktop,
          currentTechnologyImage: TechnologyBackgroundDesktop,
        }));
      }
    };

    updateWidth();

    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, [location]);

  const backgroundMap = {
    '/': `url(${currentImage.currentHomeImage})`,
    '/destination': `url(${currentImage.currentDestinationImage})`,
    '/crew': `url(${currentImage.currentCrewImage})`,
    '/technology': `url(${currentImage.currentTechnologyImage})`,
  };

  const getImageBackground = () => {
    const basePath = location.pathname.split('/')[1]; // Get the first segment of the path
    if (basePath === '') return backgroundMap['/']; // Home page
    if (backgroundMap[`/${basePath}`]) return backgroundMap[`/${basePath}`];

    switch (location.pathname) {
      case '/destination/moon':
      case '/destination/mars':
      case '/destination/europa':
      case '/destination/titan':
        return backgroundMap['/destination'];
      case '/crew/crew1':
      case '/crew/crew2':
      case '/crew/crew3':
      case '/crew/crew4':
        return backgroundMap['/crew'];
      case '/technology/technology1':
      case '/technology/technology2':
      case '/technology/technology3':
        return backgroundMap['/technology'];
      default:
        return currentImage.currentHomeImage;
    }
  };

  const currentBackgroundImage = getImageBackground();

  return { currentBackgroundImage };
}
