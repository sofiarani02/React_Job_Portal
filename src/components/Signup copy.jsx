import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { auth, googleAuthProvider } from '../firebase';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
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
    height: '80vh', 

    // minHeight: '80vh',  // Minimum height to ensure visibility
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
    overflowY: 'auto',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
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
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#4caf50',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    border: '1px solid black', // Black border
    marginBottom: '10px', // Space between buttons
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
    border: '1px solid black', // Black border
    marginBottom: '10px',
    textAlign:'center' // Space between buttons
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


const Signup = () => {
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate('/login');
  };
  const redirectToPhone = () => {
    navigate('/login-with-phone');
  };

  const onSubmit = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log('User signed up:', userCredential.user);
      redirectToLogin();
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const userCredential = await signInWithPopup(auth, provider);
      console.log('User signed up with Google:', userCredential.user);
      redirectToLogin();
    } catch (error) {
      console.error('Error signing up with Google:', error);
    }
  };

  const handlePhoneSignup = () => {
    redirectToPhone();
    console.log('Phone signup button clicked');
  };

  return (
    <div style={backgroundStyle}>
    <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img src={img} alt="Signup Login" style={styles.image} />
        </div>
        <div style={styles.formContainer}>
      <h2 style={styles.heading}>Sign Up</h2>
      <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div style={styles.formGroup}>
          <label htmlFor="username" style={styles.label}>
            Username:
          </label>
          <input
            type="text"
            id="username"
            {...register('username', {
              required: 'Username is required',
            })}
            style={styles.input}
          />
          {errors.username && <p style={styles.error}>{errors.username.message}</p>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>
            Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          <input
            type="text"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address',
              },
            })}
            style={styles.input}
          />
          {errors.email && <p style={styles.error}>{errors.email.message}</p>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="phoneNumber" style={styles.label}>
            Phone:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          <input
            type="text"
            id="phoneNumber"
            {...register('phoneNumber', {
              required: 'Phone Number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Invalid phone number (10 digits)',
              },
            })}
            style={styles.input}
          />
          {errors.phoneNumber && <p style={styles.error}>{errors.phoneNumber.message}</p>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>
            Password:&nbsp;&nbsp;
          </label>
          <input
            type="password"
            id="password"
            {...register('password', {
              required: 'Password is required',
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d).{6,}$/,
                message: 'Invalid password. At least 6 characters including alphabets and numbers.',
              },
            })}
            style={styles.input}
          />
          {errors.password && <p style={styles.error}>{errors.password.message}</p>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="retypePassword" style={{marginLeft:'-1px', paddingRight:'172px'}}>
            Retype Password:&nbsp;&nbsp;&nbsp;
          </label>
          <input 
            type="password"
            id="retypePassword"
            {...register('retypePassword', {
              required: 'Retype Password is required',
              validate: value => value === watch('password') || 'Passwords do not match',
            })}
            style={styles.input}
          />
          {errors.retypePassword && <p style={styles.error}>{errors.retypePassword.message}</p>}
        </div>
        <button type="submit" style={styles.button}>
          Sign Up
        </button>
        <button type="button" onClick={handleGoogleSignup} style={styles.googleButton}>
            <FontAwesomeIcon icon={faGoogle} style={styles.googleIcon} />
            Sign Up with Google
          </button>
        <button type="button" onClick={handlePhoneSignup} style={styles.button}>
          Sign Up with Phone
        </button>
        <p style={{ color: 'black' }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
      </div>
    </div>
    </div>
  );
};

export default Signup;
