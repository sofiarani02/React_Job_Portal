import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup copy';
import Login from './components/Login copy';
import Practice2 from './components/JobPortal/Practice2';
import Prepare from './components/JobPortal/Prepare';
import Jobs from './components/JobPortal/Jobs';
import Apply from './components/JobPortal/Apply';
import Practice from './components/JobPortal/Practice';
import Hiring from './components/JobPortal/Hiring';
import ForgotPassword from './components/ForgotPassword';
import LoginWithPhone from './components/LoginWithPhone';
import Profile from './components/JobPortal/Profile';

function App() {

  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Practice2 />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element ={<Login />} />
          <Route path="/jobportal" element ={<Practice2 />} />
          <Route path="/prepare" element ={<Prepare />} />
          <Route path="/jobs" element ={<Jobs />} />
          <Route path="/apply" element ={<Apply />} />
          <Route path="/practice" element ={<Practice />} />
          <Route path="/hiring-challenges" element ={<Hiring />} />
          <Route path="/forgot-password" element ={<ForgotPassword />} />
          <Route path="/login-with-phone" element ={<LoginWithPhone />} />
          <Route path="/profile" element ={<Profile />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App



// import React, { useEffect, useState } from 'react';
// import { auth } from './firebase';
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Signup from './components/Signup copy';
// import Login from './components/Login copy';
// import Contacts from './components/Contacts';
// import Day1 from './components/Day1';
// import Day2 from './components/Day2';
// import Day3 from './components/Day3';
// import Day4 from './components/Day4';
// import Day5 from './components/Day5';
// import Day6and7 from './components/Day6and7';
// import Day8 from './components/Day8';
// import Practice1 from './components/Practice1';
// import Practice2 from './components/JobPortal/Practice2';
// import Prepare from './components/JobPortal/Prepare';
// import Jobs from './components/JobPortal/Jobs';
// import Apply from './components/JobPortal/Apply';
// import Practice from './components/JobPortal/Practice';
// import Hiring from './components/JobPortal/Hiring';
// import ForgotPassword from './components/ForgotPassword';
// import LoginWithPhone from './components/LoginWithPhone';

// function App() {
//   const [user, setUser] = useState(null);
//   const [creationTime, setCreationTime] = useState(null);
//   const [lastSignInTime, setLastSignInTime] = useState(null);
//   const [longestInactivity, setLongestInactivity] = useState(0);
//   const [inactivityTimer, setInactivityTimer] = useState(null);


//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       setUser(user);
//       if (user) {
//         // Set creation time and last sign-in time
//         setCreationTime(user.metadata.creationTime);
//         setLastSignInTime(user.metadata.lastSignInTime);


//         // Start inactivity timer
//         const timer = setTimeout(() => {
//           handleSignOut();
//         }, 3600000); // 1 hour inactivity timeout
//         setInactivityTimer(timer);
//       } else {
//         // Clear inactivity timer
//         clearTimeout(inactivityTimer);
//       }
//     });


//     return () => {
//       unsubscribe();
//     };
//   }, []);


//   // Track user activity and update longest inactivity
//   const handleUserActivity = () => {
//     clearTimeout(inactivityTimer);
//     const now = Date.now();
//     const lastActivityTime = now - (3600000 - longestInactivity); // Subtract the current inactivity time
//     const newInactivity = now - lastActivityTime;
//     if (newInactivity > longestInactivity) {
//       setLongestInactivity(newInactivity);
//     }
//     const timer = setTimeout(() => {
//       handleSignOut();
//     }, 3600000); // 1 hour inactivity timeout
//     setInactivityTimer(timer);
//   };


//   // Handle user sign-out
//   const handleSignOut = () => {
//     auth.signOut().then(() => {
//       console.log("User signed out");
//       setUser(null);
//     }).catch((error) => {
//       console.error("Error signing out:", error);
//     });
//   };


//   // Function to display inactivity time in minutes and seconds
//   const formatInactivityTime = (milliseconds) => {
//     const minutes = Math.floor(milliseconds / 60000);
//     const seconds = Math.floor((milliseconds % 60000) / 1000);
//     return `${minutes} minutes ${seconds} seconds`;
//   };


//   // Function to format timestamp to a readable date string
//   const formatDate = (timestamp) => {
//     return new Date(timestamp).toLocaleString();
//   };


//   // Check user inactivity periodically
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleUserActivity();
//     }, 1000); // Check every second


//     // Clear interval on component unmount
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element ={<Login />} />
//           <Route path="/day1" element ={<Day1 />} />
//           <Route path="/day2" element ={<Day2 />} />
//           <Route path="/day3" element ={<Day3 />} />
//           <Route path="/day4" element ={<Day4 />} />
//           <Route path="/day5" element ={<Day5 />} />
//           <Route path="/day6&7" element ={<Day6and7 />} />
//           <Route path="/day8" element ={<Day8 />} />
//           <Route path="/practice1" element ={<Practice1 />} />
//           <Route path="/jobportal" element ={<Practice2 />} />
//           <Route path="/prepare" element ={<Prepare />} />
//           <Route path="/jobs" element ={<Jobs />} />
//           <Route path="/apply" element ={<Apply />} />
//           <Route path="/practice" element ={<Practice />} />
//           <Route path="/hiring-challenges" element ={<Hiring />} />
//           <Route path="/forgot-password" element ={<ForgotPassword />} />
//           <Route path="/login-with-phone" element ={<LoginWithPhone />} />
//           <Route path="/contacts" element = {<Contacts />} ></Route>

//         </Routes>
//         {user ? (
//           <div>
//             <p>Welcome, {user.email}</p>
//           <p>Active Member Since: {creationTime ? formatDate(creationTime) : 'N/A'}</p>
//           <p>Previous Sign-In Time: {lastSignInTime ? formatDate(lastSignInTime) : 'N/A'}</p>
//           <p>Longest Inactivity Time: {formatInactivityTime(longestInactivity)}</p>
//           <button onClick={handleSignOut}>Sign Out</button>
//           </div>
//         ) : (
//           <div>
//             <p>Please sign in.</p>
//             {/* Render sign-in form */}
//           </div>
//         )}
//       </div>
//     </Router>
//   );
// }

// export default App;
