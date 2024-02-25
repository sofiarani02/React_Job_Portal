import React from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import img1 from './img/day4LifecycleStages.png';
import img2 from './img/day4LifecycleMethods.png';
import img3 from './img/importUsestate.png';
import img4 from './img/useState.png';
import img5 from './img/SyntaxFor UseEffect.png';
import img6 from './img/workingOfUseEffect.png';
import img7 from './img/webpack.png';
import img8 from './img/babel.png';

function Day4() {
  const day3 = {
    width: '100%',
    color: 'black',
    maxWidth: '1075px',
    paddingLeft: '250px',
    textAlign: 'left',
    margin: '50px 0',
    marginLeft:'40px'
  };
  return (
    <section>
        <div>
            <Sidebar/>
              <section style={day3}>
                    <h2 style={{color:'black'}}>React Lifecycle of Components</h2>
                    <p>lifecycle of a component can be defined as the series of methods that are invoked in different stages of the component’s existence.</p>
                    <img  src={img1} width="400px" />
                    
                    <p><b>Initialization:</b> This is the stage where the component is constructed with the given Props and default state using the constructor of a Component Class.<br/>
<b>Mounting:</b> Mounting is the stage of rendering the JSX returned by the render method itself.<br/>
<b>Updating:</b> Updating is the stage when the state of a component is updated and the application is repainted.<br/>
<b>Unmounting:</b> As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.</p>

                    <h2 style={{color:'black'}}>Methods of Each Phase of Lifecycle</h2>
                    <img  src={img2} width="700px" height="300px"/>
                    <h2 style={{color:'black'}}>React Hooks</h2>
                    <p>Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks dont work inside classes — they let you use React without classes.
                    React hooks make component development easier while also improving readability and organization. They allow for code reuse, improve performance, and are compatible with functional programming. 
                    Hooks provide clearer and more maintainable code by reducing class-related complications and ensuring future compatibility.
                    </p>
                    <p><b>useState</b><br/>The React useState Hook allows us to track state in a function component.
State generally refers to data or properties that need to be tracking in an application. The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!<br/>To use the useState Hook, we first need to import it into our component.</p>
                    <img  src={img3} width="1000px"/>
                    <img  src={img4} width="700px"/>
                    <p><b>useEffect</b><br/>The useEffect Hook allows you to perform side effects in your components.
Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.<br/><b>Syntax</b></p>
                    <img src={img5} width="700px" height="250px"/>
                    <p><b>Working</b></p>
                    <img src={img6} width="700px" height="700px"/>
                    <h2 style={{color:'black'}}>Webpack</h2>
                    <p>Webpack is a tool used to combine multiple files into a single bundle (bundle.js).<br/>
The main purpose of Webpack is to manage dependencies and optimize the build process for web applications.</p>
                    <img src={img7} width="600px" height="300px"/>
                    <h2 style={{color:'black'}}>Babel</h2>
                    <p>Babel is a highly configurable compiler that lets us use newer JavaScript syntax, transforming it into older syntax that's supported
on a wider range of platforms. <br/>Babel comes in two parts: the core, and plugins. Each individual language feature that Babel can transform, such as ES2015 classes,
has a separate plugin. Collections of plugins are grouped into presets.
</p>
                    <img src={img8} width="600px" height="300px"/>
                    <p><b>Reference: </b><Link to="https://www.react.express/" target="_blank">https://www.react.express/</Link></p>
              </section>
        </div>
    <Footer/>
    </section>
    
  );
}

export default Day4;