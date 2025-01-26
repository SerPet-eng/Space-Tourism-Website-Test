import { usePageContext } from '../utils/PageContext';
import Technology from '../components/Technology/Technology';
import LoadingState from '../components/LoadingState';
import { useParams } from 'react-router';

export default function TechnologyRoutes() {
  const { technology, loading } = usePageContext();
  const { id } = useParams();

  const technologyIndex = parseInt(id.replace('technology', ''), 10) - 1;

  if (technologyIndex < 0 || technologyIndex >= technology.length) {
    return <LoadingState page="technology" />;
  }
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        technology.length > 0 && (
          <Technology
            img_portrait={technology[technologyIndex].images.portrait}
            img_landscape={technology[technologyIndex].images.landscape}
            name={technology[technologyIndex].name}
            description={technology[technologyIndex].description}
          />
        )
      )}
    </>
  );
}
