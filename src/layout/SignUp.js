import React from 'react'
import "../style/SignUp.css"
import SignUp from './SignUpForm'
import Form from './LoginForm'


function SIGNUp({formType,title,btnText}) {
    return (
      <div className="signup">
          <div className="signup-container">
              <div className="signup-header">
                  <h1>{title}</h1>
              </div>
              <div className="signup-body">
                  <SignUp 
                      formType={formType}
                      btnText={btnText}
                  />
              </div>
          </div>
      </div>
    )
  }
  
  export default SIGNUp
