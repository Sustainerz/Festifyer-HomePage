import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faGoogle, faLinkedin} from '@fortawesome/free-brands-svg-icons';
export default function Footer(props) {
  const {devName}= props;
  return (
    <div>
    <ul>
    <div className="social-icons">
       <a href="https://www.youtube.com">
       <FontAwesomeIcon icon={faYoutube} className="youtube" />
        </a>
        <a href="https://www.gmail.com">
        <FontAwesomeIcon icon={faGoogle} className="gmail" />
        </a>
        <a href="https://www.instagram.com">
        <FontAwesomeIcon icon={faInstagram} className="instagram" />
        </a>
        <a href="https://www.linkedin.com">
        <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
        </a>
      </div>
        <li><a className="active" href=""></a></li>
        <p className="copyright">
        Copyright &copy; 2023 Designed by {devName}
      </p>
      </ul>
</div>
  )
}