/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

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

export default function useBackgroundImage() {
  const location = useLocation();
  const [currentImage, setCurrentImage] = useState({
    currentHomeImage: HomeBackgroundDesktop,
    currentDestinationImage: DestinationBackgroundDesktop,
    currentCrewImage: CrewBackgroundDesktop,
    currentTechnologyImage: TechnologyBackgroundDesktop,
  });

  const screenWidths = [
    {
      maxWidth: 650,
      images: {
        currentHomeImage: HomeBackgroundMobile,
        currentDestinationImage: DestinationBackgroundMobile,
        currentCrewImage: CrewBackgroundMobile,
        currentTechnologyImage: TechnologyBackgroundMobile,
      },
    },
    {
      maxWidth: 1060,
      images: {
        currentHomeImage: HomeBackgroundTablet,
        currentDestinationImage: DestinationBackgroundTablet,
        currentCrewImage: CrewBackgroundTablet,
        currentTechnologyImage: TechnologyBackgroundTablet,
      },
    },
    {
      maxWidth: Infinity,
      images: {
        currentHomeImage: HomeBackgroundDesktop,
        currentDestinationImage: DestinationBackgroundDesktop,
        currentCrewImage: CrewBackgroundDesktop,
        currentTechnologyImage: TechnologyBackgroundDesktop,
      },
    },
  ];

  useEffect(() => {
    const updateWidth = () => {
      const screenWidth = window.innerWidth;

      const { images } = screenWidths.find(
        ({ maxWidth }) => screenWidth <= maxWidth,
      );
      setCurrentImage((prevImage) => ({
        ...prevImage,
        ...images,
      }));
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
    const basePath = location.pathname.split('/')[1];
    if (basePath === '') return backgroundMap['/'];
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
