import React from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';

function Day8() {
  const day3 = {
    width: '100%',
    color: 'black',
    maxWidth: '1075px',
    paddingLeft: '270px',
    textAlign: 'left',
    margin: '50px 0',
  };

  return (
    <section>
        <div>
            <Sidebar/>
              <section style={day3}>
                    <h2 style={{color:'black'}}>Difference between Spring and SpringBoot</h2>
                    <h2 style={{color:'black'}}>Benefits of SpringBoot</h2>
                    <p>Spring Boot includes the following features:
                      <ul>
                        <li>Embedded server eliminates the need for complex application development</li>
                        <li>Starter dependencies that facilitate building and configuring apps</li>
                        <li>Automated Spring configuration</li>
                        <li>Metrics, health check, and other reports</li>
                        <li>Everything in Spring Boot is pre-configured. We simply need to use the proper configuration to use a specific functionality. If we want to create a REST API, we can use Spring Boot.</li>                    
                      </ul>
                    </p>
                    <h2 style={{color:'black'}}>SQL Commands</h2>
              </section>
        </div>
    <Footer/>
    </section>
    
  );
}

export default Day8;