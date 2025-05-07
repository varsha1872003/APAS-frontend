// import React, { useState, useEffect } from 'react';

// const Feedback = () => {
//   const [feedback, setFeedback] = useState('');
//   const [allFeedback, setAllFeedback] = useState([]);
//   const [submitted, setSubmitted] = useState(false);
//   const [showFeedback, setShowFeedback] = useState(false);

//   // Load feedback from localStorage when the component mounts
//   useEffect(() => {
//     const storedFeedback = localStorage.getItem('coachFeedback');
//     if (storedFeedback) {
//       setAllFeedback(JSON.parse(storedFeedback));
//     }
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (feedback.trim()) {
//       const updatedFeedback = [...allFeedback, feedback];
//       setAllFeedback(updatedFeedback);
//       setFeedback('');
//       setSubmitted(true);
//       localStorage.setItem('coachFeedback', JSON.stringify(updatedFeedback));
//       setTimeout(() => setSubmitted(false), 2000);
//     }
//   };

//   const toggleFeedbackView = () => {
//     setShowFeedback(!showFeedback);
//   };

//   return (
//     <div className="feedback-wrapper">
//       <div className="feedback-card">
//         <h2 className="feedback-title">🏐 Provide Feedback</h2>

//         <form onSubmit={handleSubmit} className="feedback-form">
//           <textarea
//             className="feedback-textarea"
//             rows="5"
//             placeholder="Write your feedback for the athlete..."
//             value={feedback}
//             onChange={(e) => setFeedback(e.target.value)}
//           />
//           <button type="submit" className="feedback-button">
//             Submit Feedback
//           </button>
//         </form>

//         {submitted && (
//           <div className="feedback-success">✅ Feedback submitted!</div>
//         )}

//         <div className="feedback-list-section">
//           <button onClick={toggleFeedbackView} className="toggle-button">
//             {showFeedback ? 'Hide Feedback' : 'View Feedback'}
//           </button>

//           {showFeedback && (
//             <>
//               <h3 className="feedback-subtitle">📋 Submitted Feedback</h3>
//               {allFeedback.length > 0 ? (
//                 <ul className="feedback-list">
//                   {allFeedback.map((entry, index) => (
//                     <li key={index} className="feedback-item">
//                       {entry}
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="feedback-empty">No feedback submitted yet.</p>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Feedback;


import React, { useState, useEffect } from 'react';

const Feedback = () => {
  const [athleteId, setAthleteId] = useState('');
  const [feedback, setFeedback] = useState('');
  const [allFeedback, setAllFeedback] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  // Load feedback from localStorage on mount
  useEffect(() => {
    const storedFeedback = localStorage.getItem('coachFeedback');
    if (storedFeedback) {
      setAllFeedback(JSON.parse(storedFeedback));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (athleteId.trim() && feedback.trim()) {
      const newEntry = { athleteId, feedback };
      const updatedFeedback = [...allFeedback, newEntry];
      setAllFeedback(updatedFeedback);
      setAthleteId('');
      setFeedback('');
      localStorage.setItem('coachFeedback', JSON.stringify(updatedFeedback));
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 2000);
    }
  };

  const toggleFeedbackView = () => {
    setShowFeedback(!showFeedback);
  };

  return (
    <div className="feedback-wrapper">
      <div className="feedback-card">
        <h2 className="feedback-title">🏐 Provide Feedback</h2>

        <form onSubmit={handleSubmit} className="feedback-form">
          <input
            type="text"
            placeholder="Enter Athlete ID"
            value={athleteId}
            onChange={(e) => setAthleteId(e.target.value)}
            className="feedback-input"
          />
          <textarea
            className="feedback-textarea"
            rows="5"
            placeholder="Write your feedback for the athlete..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <button type="submit" className="feedback-button">
            Submit Feedback
          </button>
        </form>

        {submitted && (
          <div className="feedback-success">✅ Feedback submitted!</div>
        )}

        <div className="feedback-list-section">
          <button onClick={toggleFeedbackView} className="toggle-button">
            {showFeedback ? 'Hide Feedback' : 'View Feedback'}
          </button>

          {showFeedback && (
            <>
              <h3 className="feedback-subtitle">📋 Submitted Feedback</h3>
              {allFeedback.length > 0 ? (
                <ul className="feedback-list">
                  {allFeedback.map((entry, index) => (
                    <li key={index} className="feedback-item">
                      <strong>Athlete ID:</strong> {entry.athleteId} <br />
                      <strong>Feedback:</strong> {entry.feedback}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="feedback-empty">No feedback submitted yet.</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
