import React, { Component } from 'react'; // Import the React module from React.
import '../App.css'; // Import App stylesheet.
//import 'bootstrap/dist/css/bootstrap.min.css'; //Import bootstrap styles.
import image1 from '../logo02.png'; //Import image for use.
import image2 from '../logo04.png'; //Import image for use.
import image3 from '../logo03.png'; //Import image for use.
//import image4 from '../logo01.png'; //Import image for use.



class Application extends Component {
  constructor(props) {
      super(props); 
      this.handleClick = this.handleClick.bind(this); 
      this.state = {
          isClicked: false
      }  
  }

  handleClick(){
      this.setState(prevState => ({
        isClicked: !prevState.isClicked
      }));
  }


  render(){
      let isClicked = this.state.isClicked
    return(
        <div className="applications">
          {isClicked? 
          <div id="apps" onClick={this.handleClick}>
              <p><b>Web Applications</b> ⬆</p>
              <br/>
              <a href="https://itunesapiapplicationbrale.herokuapp.com/" target="_blank"><img id="linkimage1" src={image1}></img></a>
              <p id="link">An application that uses the iTunes search API.</p>
              <br/>
              <a href="https://brale.herokuapp.com" target="_blank"><img id="linkimage2" src={image2}></img></a>
              <p id="link">A simple card game that challenges the users memory.</p>
              <br/>
              <a href="https://braleapp.herokuapp.com/" target="_blank"><img id="linkimage3" src={image3}></img></a>
              <p id="link">A full stack application that allows the user to write, update and delete sports events.</p>
              <br/>
              <br/>
          </div> 
          : 
          <div onClick={this.handleClick}>
            <p><b>Web Applications</b> ⬇</p>
          </div>
        }
        </div>
      )};
}
  

export default Application; // Export CV component.