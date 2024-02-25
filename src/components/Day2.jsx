import React from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';

function Day2() {
  const day2 = {
    width: '100%',
    color: 'black',
    maxWidth: '1100px',
    paddingLeft: '100px',
    textAlign: 'left',
    margin: '50px 0',
    marginLeft:'220px'
  };

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
    marginTop: '10px', // Add some spacing between the text and the table
  };
  return (
    <section>
        <div>
            <Sidebar/>
              <section style={day2}>
                    <h2 style={{color:'black'}}>Local Storage</h2>
                    <p>LocalStorage is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date. <br /> This means the data stored persists even after the user closes the browser or restarts the computer.</p>
                
                    <h2 style={{color:'black'}}>Syntax</h2>
                    <table style={tableStyle}>
                      <tr>
                      <th>Methods</th>
                      <th>Discription</th>
                      </tr>
                      <tr>
                        <td>setItem()</td>
                        <td>This method is used to add the data through key and value to localStorage.</td>
                      </tr>
                      <tr>
                        <td>getItem()</td>
                        <td>It is used to fetch or retrieve the value from the storage using the key.</td>
                      </tr>
                      <tr>
                        <td>removeItem()</td>
                        <td>It removes an item from storage by using the key.</td>
                      </tr>
                      <tr>
                        <td>clear()</td>
                        <td>It is used to gets clear all the storage.</td>
                      </tr>
                      </table>
                    
              </section>
        </div>
    <Footer/>
    </section>
    
  );
}

export default Day2;