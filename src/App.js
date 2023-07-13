import './App.css';
import 'https://kit.fontawesome.com/9c1c3f6a2e.js'
import ImageSlider from './layout/ImageSlider.js';
import Main from './layout/Main.js';
import CardSec from './layout/CardSec.js';
import CustomNavbar from './layout/Navbar.js';
import SignUp from './layout/SignUp';

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
    <SignUp/>
        {/* <Main />
    <ImageSlider images={images} />
      <CardSec /> */}
    </div>
  );
}

export default App;