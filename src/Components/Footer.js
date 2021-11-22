import React from 'react'; //Import the React module from React.
import '../App.css'; //Import App stylesheet.
import image1 from '../github.png'; //Import image for use.
import image2 from '../linkedin.png'; //Import image for use.

//This component creates the footer for our application.
class Footer extends React.Component {
    constructor(props) {
        super(props); 
    }
    render(){ 
        return(
            <div id="footer">
                <a href="https://github.com/Braash" target="_blank"><img id="footerImage" src={image1}></img></a>
                <a href="https://www.linkedin.com/in/brandon-ashby-923711107/" target="_blank"><img id="footerImage" src={image2}></img></a>
            </div>
        );
    }
}

export default Footer; //Export Card component.