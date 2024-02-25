import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './About.css';
function About() {
  return (
    <div>
        <Sidebar />
        <section className="about-page">
                    <h1 style={{textAlign:'center'}}>About</h1>
                    <p style={{marginLeft:'200px', marginRight:'200px',textAlign:'justify'}}>Welcome to our React.js Internship Journey! Follow our interns' daily activities and progress as they learn React.js. Explore their journey in mastering frontend development through hands-on experiences and mentorship. Join us in celebrating their growth and achievements!</p>
                </section>
      < Footer />
    </div>
  );
}

export default About;