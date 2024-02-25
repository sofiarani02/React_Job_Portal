import React from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';
// import './Day1.css';

function Day1() {
  const day1 = {
    width: '100%',
    color: 'black',
    maxWidth: '1100px',
    paddingRight: '110px',
    textAlign: 'left',
    margin: '50px 0',
    marginLeft: '220px',
  };
  return (
    <section>
        <div>
            <Sidebar/>
              <section style={day1}>
                    <h2 style={{color:'black'}}>Restaurant Website</h2>
                    <h4>Created a basic Restaurant website using HTML, CSS and JavaScript</h4>
                    <h2 style={{color:'black'}}>Features:</h2>
                    <h4>1. Home</h4>
                    <ul>
                      <li><h4>UI with appropriate bg images</h4></li>
                      <li><h4>Section-wise navigations</h4></li>
                    </ul>

                    <h4>2. SignUp and Login</h4>
                    <ul>
                      <li><h4>Validation using JavaScript</h4></li>
                      <li><h4>Alert message after successful registeration</h4></li>
                    </ul>
                    
                    <h4>3. Recipes</h4>
                    <ul>
                      <li><h4>Displaying MENU card </h4></li>
                      <li><h4>Beverages, Appetizers, Main Course with its price</h4></li>
                    </ul>
                    
                    <h4>4. Order</h4>
                    <ul>
                      <li><h4>Adding items to the list by selecting item and quantity</h4></li>
                      <li><h4>Calculate final bill amount</h4></li>
                    </ul>
      
                    <h4>5. About Us</h4>
                    <ul>
                      <li><h4>History about the Restaurant</h4></li>
                      <li><h4>Contact Details with location using iFrame</h4></li>
                    </ul>
              </section>
        </div>
    <Footer/>
    </section>
    
  );
}
export default Day1;