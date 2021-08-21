import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <h5>Data Source: Nepal Open Data API</h5>
        <h6>Find me here:</h6>
        <ul className="social-links">
          <li>
            <a href="https://www.facebook.com/binaya.baral.98" target="_blank" rel="noopener noreferrer">
              <span className="icon-facebook"></span>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/binayabaral" target="_blank" rel="noopener noreferrer">
              <span className="icon-twitter"></span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/binaya.baral5/" target="_blank" rel="noopener noreferrer">
              <span className="icon-instagram"></span>
            </a>
          </li>
          <li>
            <a href="https://github.com/binayabaral" target="_blank" rel="noopener noreferrer">
              <span className="icon-github"></span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
