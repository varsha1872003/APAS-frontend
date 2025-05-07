import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fetch user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if user data exists and credentials match
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      // Redirect based on role
      if (storedUser.role === 'coach') {
        navigate('/coach');
      } else {
        navigate('/athlete');
      }
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/form.css';  // Apply styling here

// export default function Login() {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const storedUser = JSON.parse(localStorage.getItem('user'));

//     if (
//       storedUser &&
//       storedUser.email === formData.email &&
//       storedUser.password === formData.password
//     ) {
//       if (storedUser.role === 'Coach') navigate('/coach');
//       else if (storedUser.role === 'Athlete') navigate('/athlete');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Login to Your Volleyball Account</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           required
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           required
//           onChange={handleChange}
//         />
//         <button type="submit">Login</button>
//       </form>
//       <p>
//         Don't have an account? <a href="/">Sign Up</a>
//       </p>
//     </div>
//   );
// }
