import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons'

function Sidebar() {
  return (
    <div className="nav-bar">
      
      <nav className="page-select">
        <NavLink
          className="home-link"
          exact="true"
          activeClassName="active"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink
          className="about-link"
          exact="true"
          activeClassName="active"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink
          className="contact-link"
          exact="true"
          activeClassName="active"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </nav>

      <ul className="outside-acc">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/braedon-martin-4b0838173/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/braedonmartin"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://discordapp.com/users/3567/"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar