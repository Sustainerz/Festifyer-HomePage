import React from 'react';
import '../style/Login.css';

export default function Login() {
  return (
    <>
      <header className='attached-header' style={{ font: '400 1rem/1.625rem "Open Sans", sans-serif' }}>
        <div className='container'>
          <div className='row'>
            <div className="col-xl-10 offset-xl-1" style={{ color: '#1e266d' }}>
              <h1 className="text-center">Log In</h1>
            </div>
          </div>
        </div>
      </header>
      <div className='container col-xl-5 offset-xl-3.5' style={{ backgroundColor: '#f9f9f9', borderRadius: '10px', marginTop: '80px', marginBottom: '80px',height:'25vw'}}>
        <div className='row' style={{ padding: '20px', marginBottom: '10px' }}>
          <div className="col my-4 text-left">
            <p style={{textAlign:'left',color:'#515867'}}> You don't have a password? Then please <a href="/" className='signup'>Sign Up </a></p>
            <div className="mb-3 my-4">
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="exampleFormControlInput2" placeholder="Password" />
            </div>
            <div className="form-check" style={{ display: 'flex', alignItems: 'center' }}>
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault" style={{ marginRight: 'auto',color:'#515867'}}>
                Remember me
              </label>
              <span style={{ marginLeft: 'auto' }}>
                <a className="forgot-pass" href="https://festifyer.com/password/reset">I forgot password</a>
              </span>
            </div>
          </div>
        </div>
        <button className="form-control-submit-button mb-2" type="submit">Log In</button>
      </div>
    </>
  );
}
