import './App.css';
import Header from './Components/Header.js';
import CV from './Components/CV.js';
import Application from './Components/Applications.js';
import Creations from './Components/Creations.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Application />
      <Creations />
      <CV />
      <Footer />
    </div>
  );
}

export default App;
