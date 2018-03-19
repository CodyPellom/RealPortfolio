import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Footer from './Footer'

class ContactMe extends Component {
    render() {
        return (
            <div>
                <h1>Contact Me</h1>
                <h4>You can reach me in a few different ways</h4>
                <p>By Email: paulpellom@gmail.com</p>
                <br/>
                <p>By LinkedIn:</p>
                <br/>
                <p>Or, By Good Old Fashioned Phone: (470)269-0564</p>
                <Footer/>
            </div>
        );
    }
}

export default ContactMe;