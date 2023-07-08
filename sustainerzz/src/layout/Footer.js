import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div>
    <ul>
    <div className="social-icons">
       <a href="https://www.youtube.com">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://www.instagram.com">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.gmail.com">
          <i className="far fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
        <li><a className="active" href=""></a></li>
        <p className="copyright">
        Copyright &copy; 2023 Designed by Sustainerzz.
      </p>
      </ul>
</div>
  )
}