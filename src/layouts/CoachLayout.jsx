// import React from 'react';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaUser, FaTrophy, FaCommentDots, FaHome, FaUsers } from 'react-icons/fa';

const CoachLayout = () => {
  return (
    <div className="coach-dashboard">
      <nav className="coach-nav">
        <div className="nav-links">
          <Link to="/coach" className="nav-link">
            <FaHome /> Home
          </Link>
          <Link to="/coach/profile" className="nav-link">
            <FaUser /> Profile
          </Link>
          <Link to="/coach/leaderboard" className="nav-link">
            <FaTrophy /> Leaderboard
          </Link>
          <Link to="/coach/feedback" className="nav-link">
            <FaCommentDots /> Feedback
          </Link>
          <Link to="/coach/athletes" className="nav-link">
            <FaUsers /> Athletes
          </Link>
        </div>
      </nav>
      <main className="coach-content">
        <Outlet />
      </main>
    </div>
  );
};

export default CoachLayout;
