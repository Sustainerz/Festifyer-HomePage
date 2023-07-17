import React from 'react'
import "../style/Login.css"
import Form from './LoginForm'

function Login({formType,title,btnText}) {
  return (
    <div className="login">
        <div className="login-container">
            <div className="login-header">
                <h1>{title}</h1>
            </div>
            <div className="login-body">
                <Form 
                    formType={formType}
                    btnText={btnText}
                />
            </div>
        </div>
    </div>
  )
}

export default Login