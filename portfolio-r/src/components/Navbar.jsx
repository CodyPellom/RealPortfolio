import React, { Component } from 'react'
import Styled from 'styled-components'


class Navbar extends Component {
    render() {
        return (
            <div>
                <div data-aos="zoom-out-down" data-aos-easing="ease-in-quad" data-aos-once="true" data-aos-duration='1500'>
                    <div class="navbar-fixed">
                        <nav>
                            <div class="nav-wrapper">
                                <a href="#!" class="brand-logo">cody pellom</a>
                                <ul class="right hide-on-med-and-down">
                                    <li><a href="https://codypellom.com/projects">projects</a></li>
                                    <li><a href="https://codypellom.com/blog">blog</a></li>
                                    <li><a href="https://codypellom.com/about">about</a></li>
                                    <li><a href="https://codypellom.com/contacts">contact</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        );
    }
}





export default Navbar;