import React, { Component } from 'react';

        class Contacts extends React.Component {

          render() {

            return (
              <div id='foundation7'>
                <div  id ='final_title'>
                  TAKE US TO YOUR 
                  <font className='white_font'> LEADER</font>
                </div>
                <div id="containerForContacts">
                  <div className='containerPart'>
                    <div clasName="containerUnit">
                      <font className='white_font font25px'>  
                      NEW BUSINESS
                      </font>
                    </div>
                    <div className="containerUnit">
                      North Houston Office
                      hello@adnorml.com
                      281.651.2220
                    </div>
                    <div className="containerUnit">
                      1310 Rayford Park, Suite 110
                      The Woodlands, Texas 77386
                    </div>
                    <div className="containerUnit">
                      View Map
                    </div>
                    <div className="containerUnit">
                      <img src="img/c_logo.png" id="picLogoC" />
                      <img src="img/stars.png" id="picStars" />
                      <div id="reviews">3 Reviews </div>
                    </div>
                  </div>
                  <div className='containerPart'>
                    <div clasName="containerUnit">
                      <font className='white_font font25px'> 
                        CAREERS
                      </font>
                    </div>
                    <div className="containerUnit">
                      hireme@adnorml.com
                    </div>
                    <div className="containerUnit">
                      <font className='white_font font25px'> 
                        VENDOR REQUEST
                      </font>
                    </div>
                    <div className="containerUnit">
                      partners@adnorml.com
                    </div>
                  </div>
                  <div className='containerPart'>
                    <div className="containerUnit">
                      <font className='white_font font25px'> 
                        BLOG
                      </font>
                    </div>
                    <div className="containerUnit">
                      <font className='white_font font25px'> 
                        DRIBBBLE
                      </font>
                    </div>
                    <div className="containerUnit">
                      <font className='white_font font25px'> 
                        FACEBOOK
                      </font>
                    </div>
                    <div className="containerUnit">
                      <font className='white_font font25px'> 
                        TWITTER
                      </font>
                    </div>
                    <div className="containerUnit">
                      <font className='white_font font25px'> 
                        INSTAGRAM
                      </font>
                    </div>
                  </div>

                </div>

                <div id="endTag">
                  ©2017 Adnormal LLC - a web mobile app development agency headquartered in The Woodlands, TX. All rights reserved. | Privacy Policy | Sitemap
                </div>
              </div>
            );
          }
        };
export default Contacts;
