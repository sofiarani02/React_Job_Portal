import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';

function App() {
  const [user, setUser] = useState(null);
  const [creationTime, setCreationTime] = useState(null);
  const [lastSignInTime, setLastSignInTime] = useState(null);
  const [longestInactivity, setLongestInactivity] = useState(0);
  const [inactivityTimer, setInactivityTimer] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
      if (user) {
        setCreationTime(user.metadata.creationTime);
        setLastSignInTime(user.metadata.lastSignInTime);

        const timer = setTimeout(() => {
          handleSignOut();
        }, 3600000); 
        setInactivityTimer(timer);
      } else {
        clearTimeout(inactivityTimer);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleUserActivity = () => {
    clearTimeout(inactivityTimer);
    const now = Date.now();
    const lastActivityTime = now - (3600000 - longestInactivity); // Subtract the current inactivity time
    const newInactivity = now - lastActivityTime;
    if (newInactivity > longestInactivity) {
      setLongestInactivity(newInactivity);
    }
    const timer = setTimeout(() => {
      handleSignOut();
    }, 3600000); 
    setInactivityTimer(timer);
  };

  // Handle user sign-out
  const handleSignOut = () => {
    auth.signOut().then(() => {
      console.log("User signed out");
      setUser(null);
      window.location.href = '/jobportal';
    }).catch((error) => {
      console.error("Error signing out:", error);
    });
  };

  // Function to display inactivity time in minutes and seconds
  const formatInactivityTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    return `${minutes} minutes ${seconds} seconds`;
  };


  // Function to format timestamp to a readable date string
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };


  // Check user inactivity periodically
  useEffect(() => {
    const interval = setInterval(() => {
      handleUserActivity();
    }, 1000); // Check every second


    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <p>Active Member Since: {creationTime ? formatDate(creationTime) : 'N/A'}</p>
          <p>Previous Sign-In Time: {lastSignInTime ? formatDate(lastSignInTime) : 'N/A'}</p>
          <p>Longest Inactivity Time: {formatInactivityTime(longestInactivity)}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <p>Please sign in.</p>
          {/* Render sign-in form */}
        </div>
      )}
    </div>
  );
}


export default App;