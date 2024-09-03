import React from 'react';
import "./footer.css"
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer>
      <nav className='footer-nav'>
      <h3>About</h3>
        <ul className="nav-list">
          <li><Link to="/">Our Mission</Link></li>
          <li><Link to="/our mission">Our Team</Link></li>
          <li><Link to="/our team">Board Members</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/about">Contact</Link></li>
          <li><Link to="/contact">Privicy Policy</Link></li>
        </ul>
      </nav>  
      <nav className='footer-nav'>
      <h3>Services</h3>
        <ul className="nav-list">
          <li><Link to="/">Safeguarding Initiative</Link></li>
          <li><Link to="/our mission">Independent Investigations</Link></li>
          <li><Link to="/our team">Consultations</Link></li>
          <li><Link to="/news">Policy Review & Development</Link></li>
          <li><Link to="/about">Training</Link></li>
        </ul>
      </nav>  
      <nav className='footer-nav'>
      <h3>Contacts</h3>
        <ul className="nav-list">
          <li><Link to="/">Church</Link></li>
          <li><Link to="/our mission">our mission</Link></li>
          <li><Link to="/our team">our team</Link></li>
          <li><Link to="/news">news</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>  
        <nav className='footer-nav'>
        <h3>Learn More</h3>
        <ul className="nav-list">
          <li><Link to="/">Books</Link></li>
          <li><Link to="/our mission">Videos</Link></li>
          <li><Link to="/our team">Ministry Leader NewsLetter</Link></li>
          <li><Link to="/news">Resourses</Link></li>
          <li><Link to="/about">Common Questions</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav> 
      </footer>
  );
}

export default Footer;
