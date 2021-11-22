import React, { Component } from 'react'; // Import the React module from React.
import '../App.css'; // Import App stylesheet.
//import 'bootstrap/dist/css/bootstrap.min.css'; //Import bootstrap styles.
import image from '../brandon.png'; // Import logo.


class CV extends Component {
  constructor(props) {
      super(props);   
  }
  render(){
    return(
          <div className="cv">
            <header>
                <img id="cv" src={image}></img>
            </header>
          </div>
      )};
}
  

export default CV; // Export CV component.