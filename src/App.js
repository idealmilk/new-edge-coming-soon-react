import React from 'react';
import { ReactComponent as IconLinkedIn } from './assets/icons/linkedin.svg';
import Logo from './assets/logos/logo.png'
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <img src={Logo} alt="New Edge" />
          </div>
          <div className="social">
            <a href="https://www.linkedin.com/company/newedgestudio/" title="LinkedIm" target="_blank" rel="noopener noreferrer">
              <IconLinkedIn className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Just a little longer...</h1>
            <p>Our new website is coming soon. Watch this space. Shoot us an email if you're curious.</p>
          </div>
          <a href="mailto:evan@newedgestud.io">
            <div className="cta">Send us an email</div>
          </a>
        </div>
      </div>
    );
  }
}

export default App;