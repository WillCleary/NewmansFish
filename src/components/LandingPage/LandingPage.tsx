import React from 'react';
import 'assets/css/custom.css';
import 'assets/css/bootstrap.css';

import logo from 'assets/img/logo-white.png';
import darkEugene from 'assets/img/dark-eugene.png';
import darkPortland from 'assets/img/dark-portland.png';

const LandingPage = () => (
  <div className="container-fluid full-height-container">
    <div className="row full-height">
      <div className="logo-container">
        <img src={logo} className="logo" />
      </div>

      <div className="col-lg-6 col-sm-12 full-height eugene">
        <div className="double-border"></div>

        <a href="http://eugene.newmansfish.com/" className="links">
          <img src={darkEugene} />
        </a>

      </div>


      <div className="col-lg-6 col-sm-12 full-height portland">
        <div className="double-border"></div>

        <a href="https://www.newmansdelivery.com/" className="links">
          <img src={darkPortland} />
        </a>

      </div>
    </div>
  </div>
);

export default LandingPage;
