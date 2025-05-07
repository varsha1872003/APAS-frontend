import React from 'react';

const AthleteList = () => {
  const athletes = [
    { name: 'Athlete A', email: 'a@volleyballpro.com' },
    { name: 'Athlete B', email: 'b@volleyballpro.com' },
    { name: 'Athlete C', email: 'c@volleyballpro.com' },
  ];

  return (
    <div className="athlete-page">
      <h2 className="section-title">Athletes</h2>
      <div className="athlete-list">
        {athletes.map((athlete, index) => (
          <div key={index} className="athlete-item">
            <p><strong>Name:</strong> {athlete.name}</p>
            <p><strong>Email:</strong> {athlete.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AthleteList;
