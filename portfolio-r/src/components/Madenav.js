import React, { Component } from 'react';
import styled from 'styled-components'


const Nwrap = styled.div`
width: 100%;
height: 65px;
background-color: gray;

#subLogo {
    display: flex;
    flex-direction: row;
    margin-left:70%;
    text-decoration: none;
    color: white;
    
    a {
        padding-right: 5px
       
        }
   
  
    
}

#mainLogo{
    display: flex;
    flex-direction: row;
    margin-left:70%;
    text-decoration: none;
    color: white;
a{
    
    text-decoration: none;
    color: white;
    font-family: 'Bowlby One SC';
    font-size: 10px;
    padding-top: 15px;
    padding-left: 50%;
    max-width: 200px;
    }
    
}
`

class Madenav extends Component {
    render() {
        return (
            <div>
                <Nwrap>
                    <div className="madeNavClass">
                    <div id="mainLogo">
                    <a href="#" id="logoNav">cody pellom</a>
                    </div>
                    <div id="subLogo">
                    <a href="#" className="navText">projects</a>
                    <a href="#" className="navText">resume</a>
                    <a href="#" className="navText">about</a>
                    </div>
                    </div>
                </Nwrap>
            </div>
        );
    }
}

export default Madenav;