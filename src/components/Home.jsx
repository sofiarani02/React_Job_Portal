import React from 'react';
import Footer from './Footer';
import './Home.css';
import About from './About';
import Sidebar from './Sidebar';
import img1 from './img/logo.png'
import './Home.css';

function Home() {
  return (
    <section>
        <div>
            <Sidebar/>
                <section className="content">
                    <h1>Welcome to Dashboard</h1>
                    <h2 style={{color:'black'}}>Implementing various sections by learning react concepts!</h2>
                    <p>React is a JavaScript library for building user interfaces. <br />
                       React is used to build single-page applications. <br />
                      React allows us to create reusable UI components.</p>
                      <img  src={img1}/>
                    
                </section>
        </div>
    <Footer/>
    </section>
    
  );
}

export default Home;