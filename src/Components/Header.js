import React, { Component } from 'react'; // Import the React module from React.
import '../App.css'; // Import App stylesheet.
//import 'bootstrap/dist/css/bootstrap.min.css'; //Import bootstrap styles.
import image from '../braash1.png'; // Import logo.


// Display creates the Navbar with a dropdown that allows the user to choose between the Documentation, Older Models and Global Uodates.
// Navbar imported from react-bootstrap.
class Header extends Component {
  constructor(props) {
      super(props);    
  }
  render(){
    return(
        <div>
            <div className="header">
              <header>
                  <img id="Logo" src={image}></img>
              </header>
            </div>
        </div>
      )};
  }
  

export default Header; // Export Display component.