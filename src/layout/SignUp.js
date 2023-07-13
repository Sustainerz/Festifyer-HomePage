import React, { useState } from 'react';
import '../style/SignUp.css';
import ReCAPTCHA from "react-google-recaptcha";

export default function SignUp() {
  const [verified,setVerified]=useState(false);

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }
  return (
    <>
      <header className='attached-header' style={{ font: '400 1rem/1.625rem "Open Sans", sans-serif' }}>
        <div className='container'>
          <div className='row'>
            <div className="col-xl-10 offset-xl-1" style={{ color: '#1e266d' }}>
              <h1 className="text-center"><b>Sign Up</b></h1>
            </div>
          </div>
        </div>
      </header>
      <div className='container col-xl-5 offset-xl-3.5' style={{ backgroundColor: '#f9f9f9', borderRadius: '10px', marginTop: '80px', marginBottom: '80px',paddingBottom:'40px'}}>
        <div className='row' style={{ padding: '20px', marginBottom: '10px' }}>
          <div className="col my-4 text-left">
           <p style={{textAlign:'left',color:'#515867'}}>Already have account?</p>
            <div className="mb-3 my-4">
              <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
            </div>
            <div className="mb-3 my-4">
              <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Email" />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="exampleFormControlInput3" placeholder="Password" />
            </div>
            <div className="mb-3 my-4">
              <input type="confirm-pass" className="form-control" id="exampleFormControlInput4" placeholder="Confirm Password" />
            </div>
            <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={onChange}/>
          </div>
        </div>
        <button className="form-control-submit-button mb-2" type="submit" disabled={!verified}>Sign Up</button>
      </div>
    </>
  );
}
