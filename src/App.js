<<<<<<< HEAD
import './App.css';
import 'https://kit.fontawesome.com/9c1c3f6a2e.js'
import ImageSlider from './layout/ImageSlider.js';
import Main from './layout/Main.js';
import CardSec from './layout/CardSec.js';
import CustomNavbar from './layout/Navbar.js';

function App() {
  const images = [

    { src: 'https://www.festifyer.com/modules/themes/default/images/customer-logo-1.png', alt: 'Image 1' },
    
    { src: 'https://www.festifyer.com/modules/themes/default/images/customer-logo-2.png', alt: 'Image 1' },
    
    { src: 'https://www.festifyer.com/modules/themes/default/images/customer-logo-3.png', alt: 'Image 1' },
    
    { src: 'https://www.festifyer.com/modules/themes/default/images/customer-logo-4.png', alt: 'Image 1' },
    
    { src: 'https://www.festifyer.com/modules/themes/default/images/customer-logo-5.png', alt: 'Image 1' },
    
    { src: 'https://www.festifyer.com/modules/themes/default/images/customer-logo-6.png', alt: 'Image 1' },
    
  ];
  return (
    <div className="App">
    <CustomNavbar/>
    <Main />
    <ImageSlider images={images} />
      <CardSec />
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> 20fc7f4edbed0e40cd4341a3f05084e8cfce98c4
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 20fc7f4edbed0e40cd4341a3f05084e8cfce98c4
