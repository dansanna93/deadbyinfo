import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Killers from './pages/Killers';
import Survivors from './pages/Survivors';
import Killer from './pages/Killer';
import Survivor from './pages/Survivor';
import Perks from './pages/Perks';
import KillerPerks from './pages/KillerPerks';
import SurvivorPerks from './pages/SurvivorPerks';
import Perk from './pages/Perk';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/killers/" element={<Killers />} />
        <Route path="/survivors/" element={<Survivors />} />
        <Route path="/killers/*" element={<Killer />} />
        <Route path="/survivors/*" element={<Survivor />} />
        <Route path="/perks/" element={<Perks />} />
        <Route path="/killer-perks/" element={<KillerPerks />} />
        <Route path="/survivor-perks/" element={<SurvivorPerks />} />
        <Route path="/killer-perks/*" element={<Perk />} />
        <Route path="/survivor-perks/*" element={<Perk />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
