import React from 'react';
import styles from './Header.module.css';
import 'assets/css/main.css'

// import arrow from 'assets/img/dd-arrow.png';
// import locations from 'assets/img/dd-locations.jpg';

const Header = () => (
  <div className={styles.Header} data-testid="Header">
    <div id="header">
      <header>
        <ul id="sub-nav">
          {/* <li><a href="http://newmansfish.com/thecatch" className="last">The Catch</a></li> */}
          {/* <li><a href="http://newmansfish.com/process">Our Process</a></li>
          <li><a href="http://newmansfish.com/faq">FAQ</a></li>
          <li><a href="http://newmansfish.com/contact">Contact Us</a></li> */}
        </ul>
        <ul id="nav" role="navigation" className="clearfix">
          <li className="n-retail"><a></a>
          </li>
          <li className="n-wholesale active"><a href="http://newmansfish.com/wholesale"></a>
            {/* <div className="dropdown" id="s-wholesale">
              <div className="dropdown-inner">
                <img
                  src={arrow}
                  alt={'arrow'}
                  className="arrow-wholesale" />
                <div className="dd-2">
                  <h2>Wholesale report</h2>
                  <form method="post" action="http://newmansfish.com/">
                    <div className="hiddenFields">
                      <input type="hidden" name="ACT" value="11" />
                      <input type="hidden" name="RET" value="wholesale/order" />
                      <input type="hidden" name="site_id" value="1" />
                      <input type="hidden" name="csrf_token"
                        value="5a77173e1278cf99896e920bcdd01bcfe8aa45e3" />
                    </div>


                    <p><label>Username:</label>
                      <input
                        type="text"
                        name="username"
                        data-maxlength="32"
                        data-size="25"
                        data-style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAUBJREFUOBGVVE2ORUAQLvIS4gwzEysHkHgnkMiEc4zEJXCMNwtWTmDh3UGcYoaFhZUFCzFVnu4wIaiE+vvq6+6qTgthGH6O4/jA7x1OiCAIPwj7CoLgSXDxSjEVzAt9k01CBKdWfsFf/2WNuEwc2YqigKZpK9glAlVVwTTNbQJZlnlCkiTAZnF/mePB2biRdhwHdF2HJEmgaRrwPA+qqoI4jle5/8XkXzrCFoHg+/5ICdpm13UTho7Q9/0WnsfwiL/ouHwHrJgQR8WEwVG+oXpMPaDAkdzvd7AsC8qyhCiKJjiRnCKwbRsMw9hcQ5zv9maSBeu6hjRNYRgGFuKaCNwjkjzPoSiK1d1gDDecQobOBwswzabD/D3Np7AHOIrvNpHmPI+Kc2RZBm3bcp8wuwSIot7QQ0PznoR6wYSK0Xb/AGVLcWwc7Ng3AAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;"
                        data-autocomplete="off" />
                    </p>
                    <p><label>Password:</label> <input
                      type="password"
                      name="password"
                      value=""
                      data-maxlength="32"
                      data-size="25"
                      data-style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAUBJREFUOBGVVE2ORUAQLvIS4gwzEysHkHgnkMiEc4zEJXCMNwtWTmDh3UGcYoaFhZUFCzFVnu4wIaiE+vvq6+6qTgthGH6O4/jA7x1OiCAIPwj7CoLgSXDxSjEVzAt9k01CBKdWfsFf/2WNuEwc2YqigKZpK9glAlVVwTTNbQJZlnlCkiTAZnF/mePB2biRdhwHdF2HJEmgaRrwPA+qqoI4jle5/8XkXzrCFoHg+/5ICdpm13UTho7Q9/0WnsfwiL/ouHwHrJgQR8WEwVG+oXpMPaDAkdzvd7AsC8qyhCiKJjiRnCKwbRsMw9hcQ5zv9maSBeu6hjRNYRgGFuKaCNwjkjzPoSiK1d1gDDecQobOBwswzabD/D3Np7AHOIrvNpHmPI+Kc2RZBm3bcp8wuwSIot7QQ0PznoR6wYSK0Xb/AGVLcWwc7Ng3AAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;"
                      data-autocomplete="off" /><br />
                      <button>Submit</button>
                    </p>
                  </form>

                </div>
                <div className="dd-2 last">
                  <h2>Don&apos;t have a login?</h2>
                  <p>Contact Newman’s wholesale by calling 503.286.5950
                    in order to obtain a username and password. Once you have done so, login
                    and view the Daily Fish Report and place wholesale orders online.</p>
                </div>
              </div>
            </div> */}
          </li>
          <li className="n-seafood"><a href="http://newmansfish.com/seafood"></a>
          </li>

          <li className="logo"><a href="http://newmansfish.com/home">Newman&apos;s Fish Company Inc.</a></li>
          <li className="text-right n-restaurant"><a href="http://newmansfish.com/restaurants"></a>
          </li>
          <li className="text-right n-catch"><a href="http://newmansfish.com/about"></a>
          </li>
          <li className="text-right n-locations"><a href="http://newmansfish.com/locations"></a>
            {/* <div className="dropdown" id="s-locations">
              <div className="dropdown-inner">
                <img src={arrow} className="arrow-locations"/>
                  <div className="dd-3">
                    <p>
                      <img
                      src={locations}/>
                    </p>
                  </div>
                  <div className="dd-3 border">
                    <h2>Address</h2>
                    <p>735 N.W. 21st Street<br />
                      Portland, OR 97209 <br />
                      (Parking Lot in Rear) <br /></p>
                  </div>
                  <div className="dd-3 last">
                    <h2>Hours</h2>
                    <p>Mon-Sat: 9:30 am - 7:00 pm <br />
                      Sunday: 10:00 am - 7:00 pm <br />
                      Closed on Thanksgiving Day, <br />
                      Christmas Day and July 4th</p>
                  </div>
              </div>
            </div> */}
          </li>
        </ul>
      </header>
    </div>
  </div>
);

export default Header;
