import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import Contacts from './components/Contacts';
import Day1 from './components/Day1';
import Day2 from './components/Day2';
import Day3 from './components/Day3';
import Day4 from './components/Day4';
import Day5 from './components/Day5';
import Day6and7 from './components/Day6and7';
import Day8 from './components/Day8';
import Practice1 from './components/Practice1';
import Practice2 from './components/JobPortal/Practice2';
import Navbar from './components/Navbar';
import Prepare from './components/JobPortal/Prepare';

function App() {

  return (
    <Router>
      <div>
       <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element ={<Login />} />
          <Route path="/day1" element ={<Day1 />} />
          <Route path="/day2" element ={<Day2 />} />
          <Route path="/day3" element ={<Day3 />} />
          <Route path="/day4" element ={<Day4 />} />
          <Route path="/day5" element ={<Day5 />} />
          <Route path="/day6&7" element ={<Day6and7 />} />
          <Route path="/day8" element ={<Day8 />} />
          <Route path="/practice1" element ={<Practice1 />} />
          <Route path="/jobportal" element ={<Practice2 />} />
          <Route path="/prepare" element ={<Prepare />} />
          <Route path="/contacts" element = {<Contacts />} ></Route>

        </Routes>
      </div>
    </Router>
  )
}

export default App
