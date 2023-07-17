import React from 'react'
import '../style/Main.css'
import {useNavigate } from 'react-router-dom';
function Main() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Signup'); // Replace '/new-page' with the desired route path
  };

  return (
    <div class="center-content">
        <div class="content-wrapper">
            <h1>Create your event within 5 minutes</h1>
            <p>Manage your events and event attendees professionally and simply without the need for an expert</p>
            <button onClick={()=>{handleClick()}}>Sign Up</button>
            <img src={require("../Image/image.webp")} alt="Image" />
        </div>
  </div>
         
  )
}

export default Main