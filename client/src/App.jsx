// import Test from './test/Test';

// export default function App() {
//   return (
//     <div>
//       <h1>Sane Test</h1>
//       <Test />
//     </div>
//   );
// }

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './components/Home/Home';

import NotFound from './components/Error/NotFound';

import Destination from './components/Destination/Destination';
import Crew from './components/Crew/Crew';
import Technology from './components/Technology/Technology';

import useBackgroundImage from './utils/useBackgroundImage';

export default function App() {
  const { currentBackgroundImage } = useBackgroundImage();

  return (
    <>
      <div className="app" style={{ backgroundImage: currentBackgroundImage }}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
