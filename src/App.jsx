import Navbar from './components/Navbar';
import Button from './components/Button';
import Pagination from './components/Pagination';
import SmallPagination from './components/SmallPagination';
import DestinationTab from './components/DestinationTab';

import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import Technology from './components/Technology/Technology';
import Crew from './components/Crew/Crew';
import NotFound from './components/Error/NotFound';
import { usePageContext } from './utils/PageContext';

export default function App() {
  const { destinations, crew, technology, loading } = usePageContext();

  return (
    <>
      <div className="app">
        <Navbar />
        <NotFound />
      </div>

      <div className="components" style={{ display: 'none' }}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          destinations.length > 0 && (
            <Destination
              img={destinations[0].images.png}
              name={destinations[0].name}
              description={destinations[0].description}
              distance={destinations[0].distance}
              travel={destinations[0].travel}
            />
          )
        )}

        {loading ? (
          <div>Loading...</div>
        ) : (
          crew.length > 0 && (
            <Crew
              img={crew[0].images.png}
              name={crew[0].name}
              role={crew[0].role}
              bio={crew[0].bio}
            />
          )
        )}

        {loading ? (
          <div>Loading...</div>
        ) : (
          technology.length > 0 && (
            <Technology
              img_portrait={technology[0].images.portrait}
              img_landscape={technology[0].images.landscape}
              name={technology[0].name}
              description={technology[0].description}
            />
          )
        )}

        <Home />
        <Navbar />
        <Button />
        <Pagination />
        <SmallPagination />
        <DestinationTab />
      </div>
    </>
  );
}
