import React from 'react';
// import styles from './Footer.module.css';

const Footer = () => (
  <>
    <div id="footer-top">
      <div className="footer-inner">
        <div id="footer-question">
          <h3>Have a question?</h3>
          <p>Read our <a href="http://newmansfish.com/faq">FAQS</a> or <a
            href="http://newmansfish.com/contact">contact us</a> <br />503.286.5950</p>
        </div>
        <div id="footer-logo">
          <h3><a href="http://newmansfish.com/home">Newman&apos;s Fish Company Inc.</a></h3>
        </div>
        <div id="footer-newsletter">
          {/* <h3>Join our Newsletter</h3>
          <form
            action="http://newmansfish.us7.list-manage.com/subscribe/post?u=d74d6b24448a7199fcd532dd9&amp;id=f410d4de3c"
            method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate"
            target="_blank" data-novalidate="">
            <input type="text" value="ENTER YOUR EMAIL" name="EMAIL"
              data-onfocus="if(this.value == 'ENTER YOUR EMAIL') {this.value = '';}"
              data-onblur="if (this.value == '') {this.value = 'ENTER YOUR EMAIL';}" />
          </form> */}
        </div>
      </div>
    </div>
    <div className="clearfix"></div>
    <div id="footer-bottom">
      <ul className="clearfix">
        {/* <li><a href="http://newmansfish.com/seafood">Seafood</a></li>
        <li><a href="http://newmansfish.com/wholesale">Wholesale</a></li>
        <li><a href="http://newmansfish.com/retail">Retail</a></li>
        <li><a href="http://newmansfish.com/restaurants">Restaurants</a></li>
        <li><a href="http://newmansfish.com/thecatch">The Catch</a></li>
        <li><a href="http://newmansfish.com/locations">Locations</a></li>
        <li><a href="http://newmansfish.com/about">About Us</a></li>
        <li><a href="http://newmansfish.com/faq">FAQ</a></li>
        <li><a href="http://newmansfish.com/contact">Contact Us</a></li>
        <li><a href="http://eugene.newmansfish.com/">Eugene Site</a></li> */}
      </ul>
      <div role="contentinfo" id="footer-info" className="clearfix">
        Copyright 2022 Newman&apos;s Fish Company Inc. All rights reserved.
      </div>
    </div>
  </>
);

export default Footer;
