import { usePageContext } from '../utils/PageContext';
import Crew from '../components/Crew/Crew';
import { useParams } from 'react-router-dom';

export default function CrewRoutes() {
  const { crew, loading } = usePageContext();
  const { id } = useParams();

  const crewIndex = parseInt(id.replace('crew', ''), 10) - 1;

  if (crewIndex < 0 || crewIndex >= crew.length) {
    return <div style={{ color: 'white' }}>Crew not found</div>;
  }

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        crew.length > 0 && (
          <Crew
            img={crew[crewIndex].images.png}
            name={crew[crewIndex].name}
            role={crew[crewIndex].role}
            bio={crew[crewIndex].bio}
          />
        )
      )}
    </>
  );
}
