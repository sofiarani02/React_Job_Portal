import React from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';

function Day6and7() {
  const day3 = {
    width: '100%',
    color: 'black',
    maxWidth: '1075px',
    paddingLeft: '250px',
    textAlign: 'left',
    margin: '50px 0',
  };

  return (
    <section>
        <div>
            <Sidebar/>
              <section style={day3}>
                    <h2 style={{color:'black'}}>Implement routing concept using vite</h2>
                    <p><b>Task: </b>Create a React App with dashboard, login and sign up using html templates, also perform routing of pages</p>
              </section>
        </div>
    <Footer/>
    </section>
    
  );
}

export default Day6and7;