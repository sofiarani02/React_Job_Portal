import React from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';
import img1 from './img/oops-concept.png';

function Day5() {
  const day3 = {
    width: '100%',
    color: 'black',
    maxWidth: '1075px',
    paddingLeft: '250px',
    textAlign: 'left',
    margin: '50px 0',
    marginLeft:' 30px'
  };
  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
    marginTop: '10px',
    border: '1px solid black',
  };
  const cellStyle = {
    border: '1px solid #ccc',
    padding: '8px', // Adjust padding as needed
  };
  const  headerCellStyle = {
    border: '1px solid #ccc',
    padding: '8px', 
    backgroundColor: '#f2f2f2',
  };
  return (
    <section>
        <div>
            <Sidebar/>
              <section style={day3}>
                    <h2 style={{color:'black'}}>Difference between ES5 and ES6</h2>
                    <table style={tableStyle}>
                      <tr>
                      <th style={headerCellStyle}>ES5</th>
                      <th style={headerCellStyle}>ES6</th>
                      </tr>
                      <tr>
                        <td style={cellStyle}>ECMA script is a trademarked scripting language specification defined by Ecma International. The fifth edition of the  same is known as ES5</td>
                        <td style={cellStyle}>ECMA script is a trademarked scripting language specification defined by Ecma International. The sixth edition of the same is known as ES6 </td>
                      </tr>
                      <tr>
                        <td style={cellStyle}>It supports primitive data types that are string, number, boolean, null, and undefined. </td>
                        <td style={cellStyle}>It introduced a new primitive data type ‘symbol’ for supporting unique values.</td>
                      </tr>
                      <tr>
                        <td style={cellStyle}>There is only one way to define the variables by using the var keyword.</td>
                        <td style={cellStyle}>There are two new ways to define variables that are let and const.</td>
                      </tr>
                      <tr>
                        <td style={cellStyle}>It has a lower performance and Object manipulation is time-consuming as compared to ES6.</td>
                        <td style={cellStyle}>It has a higher performance and Object manipulation is less time time-consuming as compared to ES6.</td>
                      </tr>
                      <tr>
                        <td style={cellStyle}>In ES5, both function and return keywords are used to define a function.</td>
                        <td style={cellStyle}>An arrow function is a new feature introduced in ES6 by which we don’t require the function keyword to define the function.</td>
                      </tr>
                      </table>
                      <h2 style={{color:'black'}}>Difference between CRA and Vite</h2>
                      <p><b>React: </b>CRA provides a predefined structure that developers need to adhere to.<br/>
<b>Vite: </b>It provides more flexibility in configuration compared to CRA. While it comes with sensible defaults, developers have more control over the build process and can customize it as needed.
</p>
                      <h2 style={{color:'black'}}>Java OOPs Concept</h2>
                      <p>Object-Oriented Programming is a methodology or paradigm to design a program using classes and objects. It simplifies software development and maintenance by providing some concepts. An Object can be defined as an instance of a class. An object contains an address and takes up some space in memory. Any entity that has state and behavior is known as an object. For example, a chair, pen, table, keyboard, bike, etc. It can be physical or logical.</p>
                      <img src={img1} width="600px" height="500px"/>
                      <h4 style={{color:'black'}}>Task: Create Employee Management System</h4>
                      <p>Creat an application to store and retrieve employee details in console using collections</p>
              </section>
        </div>
    <Footer/>
    </section>
    
  );
}

export default Day5;