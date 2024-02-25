import React from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';
import img1 from './img/createApp.png'
import img2 from './img/day3-react.png'

function Day3() {
  const day3 = {
    width: '100%',
    color: 'black',
    maxWidth: '1075px',
    paddingLeft: '250px',
    textAlign: 'left',
    margin: '50px 0',
    marginLeft:'40px',
  };
  return (
    <section>
        <div>
            <Sidebar/>
              <section style={day3}>
                    <h2 style={{color:'black'}}>JSX</h2>
                    <p>JSX is an extension to the JavaScript language that adds a new kind of expression, the JSX expression used to create React elements. JSX expressions are a concise syntax for calling the API, <b>React.createElement(type, props, ...children)</b>. We can use JSX expressions anywhere we could use any other expression, e.g. in a return statement or variable assignment.</p>
                
                    <h2 style={{color:'black'}}>React</h2>
                    <p>React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components. Create-react-app provided by Facebook, 
it automatically sets up a new React project with default project structure and feature set.   
React is one of the best way for beginners to start a new project
</p>
                    <h2 style={{color:'black'}}>Benefits of React</h2>
                    <img  src={img2} width="400px" />
                    <h2 style={{color:'black'}}>Installing Node.js and npm</h2>
                    <p>Before you can start using Create React App or any other JavaScript tooling, you need to have Node.js and npm installed on your machine. <br/> Follow these steps to install Node.js and npm:
                    <br/>
<b>1. </b>Visit the Node.js website.<br/>
<b>2. </b>Download the appropriate installer for your operating system.<br/>
<b>3. </b>Run the installer and follow the installation instructions.<br/>
<b>4. </b>Once Node.js is installed, npm will also be installed automatically.<br/>
<b>5. </b>To verify that Node.js and npm are installed correctly, open a terminal or command prompt and type the following commands:<br/>
<ul><li>node -v (This should print the installed version of Node.js.)</li>
<li>npm -v (This should print the installed version of npm.)</li></ul></p>
                    <h2 style={{color:'black'}}>Create React App</h2>
                    <img  src={img1} width="1000px" />
                    
              </section>
        </div>
    <Footer/>
    </section>
    
  );
}

export default Day3;