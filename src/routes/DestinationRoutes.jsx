import { usePageContext } from '../utils/PageContext';
import Destination from '../components/Destination/Destination';
import LoadingState from '../components/LoadingState';
import { useParams } from 'react-router';

export default function DestinationRoutes() {
  const { destinations, loading } = usePageContext();
  const { id } = useParams();

  console.log(destinations);

  const destinationIndex = destinations.findIndex((destination) => {
    const destinationId = destination.name.toLowerCase();
    return destinationId === id;
  });

  if (destinationIndex === -1) {
    // Handle the case where the destination is not found
    return <LoadingState page="destination" />;
  }

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Destination
          img={destinations[destinationIndex].images.png}
          name={destinations[destinationIndex].name}
          description={destinations[destinationIndex].description}
          distance={destinations[destinationIndex].distance}
          travel={destinations[destinationIndex].travel}
        />
      )}
    </>
  );
}
