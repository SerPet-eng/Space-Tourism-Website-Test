import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './components/Home/Home';

import NotFound from './components/Error/NotFound';

import DestinationRoutes from './routes/DestinationRoutes';
import CrewRoutes from './routes/CrewRoutes';
import TechnologyRoutes from './routes/TechnologyRoutes';

import useBackgroundImage from './utils/useBackgroundImage';

export default function App() {
  const { currentBackgroundImage } = useBackgroundImage();

  return (
    <>
      <div className="app" style={{ backgroundImage: currentBackgroundImage }}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination">
            <Route index element={<Navigate to="moon" />} />
            <Route path=":id" element={<DestinationRoutes />} />
          </Route>
          <Route path="/crew">
            <Route index element={<Navigate to="crew1" />} />
            <Route path=":id" element={<CrewRoutes />} />
          </Route>
          <Route path="/technology">
            <Route index element={<Navigate to="technology1" />} />
            <Route path=":id" element={<TechnologyRoutes />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
