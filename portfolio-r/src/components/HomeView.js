import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Navbar'
import styled from 'styled-components'
import Logotext from './Logotext'
import Mainimage from './Mainimage'
import Madenav from './Madenav';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



class HomeView extends Component {
    render() {
        return (
          


      <div className="HomeView">
                    <header>
        
                        <br />
                        <br />
                        <Logotext />
                        <Mainimage />
                    </header>
                  
                        <div class="section white">
                            <div class="row container">

                                <h4 class="header" id="mainTopText">Education</h4>

                                    <p class="grey-text text-darken-3 lighten-3" id="mainSubText">At General Assembly I absorbed programming fundamentals in an agile workspace which promoted individual programmatic thinking skills and group collaboration prinicples. I earned an essential full-stack skill-set along with several languages such as JavaScript, HTML5 and CSS.   </p>
                               
                            </div>
                        </div>
                        <div class="parallax-container">
                            <div class="parallax"><img src="https://i.imgur.com/MBPVqBT.png" /></div>
                        </div>
                        <div class="section white">
                            <div class="row container">

                                <h4 class="header"id="mainTopText">Implementation</h4>

                                
                                    <p class="grey-text text-darken-3 lighten-3"id="mainSubText">I use front-end platforms such as react and ruby to create dynamic Applications, APIs and websites such as this one. I practice backend fundamentals within express, node and MongoDB to create fast and secure servers. </p>
                               
                            </div>
                        </div>
                        <div class="parallax-container">
                            <div class="parallax"><img src="https://i.imgur.com/iMmdjX3.png" />
                            </div>
                        </div>

                        <div class="section white">
                            <div class="row container">
                                <h4 class="header"id="mainTopText">Results</h4>
                               
                                    <p class="grey-text text-darken-3 lighten-3"id="mainSubText">I place a strong emphasis on utilizing sensible scripting along with dry code fundamentals.</p>
                                
                            </div>
                        </div>
                        <div class="parallax-container">
                            <div class="parallax"><img src="https://i.imgur.com/3LF4K5n.gif" /></div>
                        </div>
                        <div class="section white">
                            <div class="row container">
                                <h4 class="header"id="mainTopText">Significance</h4>
                              
                                    <p class="grey-text text-darken-3 lighten-3"id="mainSubText">Web Development has become a lifestyle for me. Stick around for a while to see why I love it so much.</p>
                               
                            </div>
                        </div>
                        <div class="parallax-container">
                            <div class="parallax"><img src="https://i.imgur.com/T2NkHpT.jpg" /></div>
                             
                        </div>
                 
                               
                    <Footer />
                    
                    
                </div>



            
        );
    }
}

export default HomeView;