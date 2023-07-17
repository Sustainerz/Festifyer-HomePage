import './App.css';
import 'https://kit.fontawesome.com/9c1c3f6a2e.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './layout/Navbar.js';
import Home from './layout/Home';
import Footer from './layout/Footer';
import Login from './layout/Login.js';
import Form from './layout/LoginForm.js';
import SIGNUp from './layout/SignUp.js';
function App() {
  const Main = () => <h1>Hello world</h1>;
  const images = [

    { src: 'https://www.festifyer.com/modules/themes/default/images/customer-logo-1.png', alt: 'Image 1' },
    { src: 'https://www.festifyer.com/modules/themes/default/images/customer-logo-2.png', alt: 'Image 1' },
    { src: 'https://www.festifyer.com/modules/themes/default/images/customer-logo-3.png', alt: 'Image 1' },
    { src: 'https://www.festifyer.com/modules/themes/default/images/customer-logo-4.png', alt: 'Image 1' },
    { src: 'https://www.festifyer.com/modules/themes/default/images/customer-logo-5.png', alt: 'Image 1' },
    { src: 'https://www.festifyer.com/modules/themes/default/images/customer-logo-6.png', alt: 'Image 1' },
    
  ];
  return (
    <Router>    
      <div className="App">
        <CustomNavbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/Login' element={<Login formType={'login'} title={'Log In'} btnText={'Log In'} />}/>
            <Route path='/LoginForm' element={<Form></Form>}/>
            <Route path='/Forgot' element={<Login formType={'forgetPassword'} title={'Reset Password'} btnText={'Send me password reset link'}/>}/>
            <Route path='/Signup' element={<SIGNUp formType = {"signup"} title={'Sign Up'} btnText={'Sign Up'}/>}/>
        </Routes>
        <Footer DevName= 'Sustainerzz'></Footer>
      </div>
    </Router>
  );
}

export default App;