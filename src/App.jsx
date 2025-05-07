import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import CoachLayout from './layouts/CoachLayout';
import CoachDashboard from './pages/CoachDashboard';
import CoachProfile from './pages/CoachProfile';
import Leaderboard from './pages/Leaderboard';
import Feedback from './pages/Feedback';
import './styles.css';
import AthleteList from './pages/AthleteList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/coach" replace />} />
        <Route path="/coach" element={<CoachLayout />}>
          <Route index element={<CoachDashboard />} />
          <Route path="profile" element={<CoachProfile />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="athletes" element={<AthleteList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
