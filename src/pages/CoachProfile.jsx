// import React from 'react';

const CoachProfile = () => {
  const coach = {
    name: 'Varsha',
    email: 'coach@volleyballpro.com',
    specialization: 'Volleyball',
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">Coach Profile</h2>
      <div className="profile-card">
        <p><strong>Name:</strong> {coach.name}</p>
        <p><strong>Email:</strong> {coach.email}</p>
        <p><strong>Specialization:</strong> {coach.specialization}</p>
      </div>
    </div>
  );
};

export default CoachProfile;
