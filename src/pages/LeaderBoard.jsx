// import React from 'react';

const Leaderboard = () => {
  const athletes = [
    { name: 'Athlete A', score: 95 },
    { name: 'Athlete B', score: 90 },
    { name: 'Athlete C', score: 85 },
  ];

  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">Leaderboard</h2>
      <div className="leaderboard-card">
        {athletes.map((athlete, index) => (
          <div key={index} className="leaderboard-item">
            <span>{index + 1}. {athlete.name}</span>
            <span className="leaderboard-score">{athlete.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
