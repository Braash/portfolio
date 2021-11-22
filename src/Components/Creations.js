import React, { Component } from 'react'; // Import the React module from React.
import '../App.css'; // Import App stylesheet.
//import 'bootstrap/dist/css/bootstrap.min.css'; //Import bootstrap styles.
import image1 from '../CREATIONSnew.png'; // Import img




class Creations extends Component {
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
              <p><b>Creations</b> ⬆</p>
              <img id="imagenew" src={image1}></img>
          </div> 
          : 
          <div onClick={this.handleClick}>
            <p><b>Creations</b> ⬇</p>
          </div>
        }
        </div>
      )};
}
  

export default Creations; // Export CV component.