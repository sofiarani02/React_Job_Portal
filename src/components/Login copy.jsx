import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import bgImage from './img/bg.png';
import img from './img/SignupLogin.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row', // Display in a row
    justifyContent: 'space-between', // Space between items
    alignItems: 'center', // Center items vertically
    margin: 'auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent background
    border: '1px solid black', // Black border
    marginLeft: '120px',
    marginRight: '150px',
    marginTop: '2vh',
  },
  imageContainer: {
    flex: 1, // Take up 1 part of the container
  },
  image: {
    width: '100%',
    height: 'auto', // Maintain aspect ratio
  },
  formContainer: {
    flex: 1, // Take up 1 part of the container
    marginLeft: '50px', // Adjust spacing
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  formGroup: {
    marginBottom: '10px',
    display: 'flex', // Display label and input in the same line
    alignItems: 'flex-end', // Align items vertically in the center
  },
  label: {
    marginBottom: '5px',
    color: 'black', // Label color
    textAlign: 'left',
    width: '100%', // Adjusted width
  },
  input: {
    padding: '8px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid black', // Black border
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Transparent background
    color: 'black', // Text color
    width: '100%', // Adjusted width
    marginRight:'22px',
    marginLeft:'-20px'
  },
  button: {
    marginLeft:'-22px',
    fontSize: '16px',
    backgroundColor: '#4caf50',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    border: '1px solid black', // Black border
    marginBottom: '10px',
    width:'500px' // Space between buttons
  },
  googleButton: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#4285F4',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    border: '1px solid black',
    marginBottom: '10px',
    textAlign:'center' ,
    width:'500px'
  },
  googleIcon: {
    marginRight: '8px',
    color: '#fff',
    paddingLeft:'150px'
  },
  error: {
    color: 'red',
    marginTop: '5px',
  },
};

const backgroundStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '92vh',
  overflow: 'hidden',
  width: '217vh',
  marginTop:'-10px',
  marginLeft:'-65px',
  marginBottom:'-58px'
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const redirectToJobPortal = () => {
    navigate('/jobportal');
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const showAlert = () => {
    setSnackbarOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      redirectToJobPortal();
    } catch (error) {
      console.error(error);
      showAlert();
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const userCredential = await signInWithPopup(auth, provider);
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      redirectToJobPortal();
    } catch (error) {
      console.error(error);
      showAlert();
    }
  };

  return (
    <div style={backgroundStyle}>
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img src={img} alt="Signup Login" style={styles.image} />
        </div>
        <div style={styles.formContainer}>
          <h1 style={styles.heading}>Login Page</h1>
          <form onSubmit={handleSubmit} style={styles.form} className="login-form">
          <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>
            Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Login
        </button>
          </form>
          <button type="button" onClick={handleGoogleSignIn} style={styles.googleButton}>
            <FontAwesomeIcon icon={faGoogle} style={styles.googleIcon} />
            Login with Google
          </button>
          <p>
            Need to Signup? <Link to="/signup">Create Account</Link>
          </p>
          <p>
            <Link to="/forgot-password">Forgot your password?</Link>
          </p>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000} // Adjust as needed
            onClose={handleSnackbarClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <MuiAlert elevation={6} variant="filled" severity="error" onClose={handleSnackbarClose}>
              Invalid credentials
            </MuiAlert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
};

export default Login;