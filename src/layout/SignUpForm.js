import React, { useState } from 'react'
import "../style/SignUp.css"
import InputField from './InputField'
import ReCAPTCHA from "react-google-recaptcha";
import {Link } from 'react-router-dom';

function SignUp({formType, btnText}) 
{
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const handleCaptchaChange = (value) => {
    setIsCaptchaValid(!!value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isCaptchaValid) {
      console.log("reCAPTCHA validated!");
    } else {
      console.log("Please validate the reCAPTCHA.");
    }
  };
  return (
<form action="" className="signup-form">
        {
           formType=='signup'?
           <p><Link to ='/Login'>Already have account?</Link></p>
           :
           <p>Sign Up</p>
        }
<InputField type={'text'} placeHolder={'Name'}/>
            <InputField type={'email'} placeHolder={'Email'}/>  <InputField type={'password'} placeHolder={'Password'}/>
            <InputField type={'password'} placeHolder={'Confirm Password'}/>
        {
            formType=='signup'? 
             <div>
                <label htmlFor=""></label>
                <form onSubmit={handleSubmit}>
                <ReCAPTCHA
                    sitekey="YOUR_RECAPTCHA_SITE_KEY"
                    onChange={handleCaptchaChange}
                />
                </form>
             </div>
             :
             <div></div>
        }
        {
            formType=='signup'? 
             <button>{btnText}</button>
             :
             <button>{btnText}</button>
        }

</form>
  )

}

export default SignUp