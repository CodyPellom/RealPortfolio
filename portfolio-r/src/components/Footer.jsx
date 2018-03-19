import React, { Component } from 'react';
import styled from 'styled-components'
import ContactMe from './ContactMe'
import { Link } from 'react-router-dom'
import HomeView from './HomeView'


class Footer extends Component {
    render() {
        return (
            <footer class="page-footer">
                <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                            <h5 class="white-text">Thanks For Stopping By</h5>
                            <p class="grey-text text-lighten-4">Interested in my work? Here are some of the projects I've worked on. You can also check out my <a class="grey-text text-lighten-3" href="https://github.com/CodyPellom">github here</a> </p>
                        </div>
                        <div class="col l4 offset-l2 s12">
                            <h5 class="white-text"></h5>
                            <ul>
                                <li><a class="grey-text text-lighten-3" href="http://optimistic-fermi-6dd85a.bitballoon.com/">BlackJack</a></li>
                                <li><a class="grey-text text-lighten-3" href=" https://wdi14project2-confessons.herokuapp.com/">Confessions</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">Jobba</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        © 2018 Cody Pellom<p class="grey-text text-lighten-4"> </p>
                        <a class="grey-text text-lighten-4 right" href='/ContactMe'onClick={ ContactMe }>Contact Me</a> 
                        <br/>
                        <a class="grey-text text-lighten-4 right" href='/'onClick={ HomeView }>Home</a>
                    </div>
                </div>
              
            </footer>


        );
    }
}

export default Footer;