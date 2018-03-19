import React, { Component } from 'react';
import styled from 'styled-components'
import aos from 'aos'

const Imwrap = styled.div`
img {
    width: 100vw;
    max-height: 850px;
    border: solid 5px;
    margin-top: 7.5%;
}
`

class Mainimage extends Component {
    render() {
        return (
            <div>
                
                <Imwrap>
                <div data-aos="fade-up" data-aos-easing="ease-in-quad" data-aos-once="true" data-aos-duration='700'>
                <img class="mainimage"src="https://i.imgur.com/J9lQVNT.jpg"/>
                </div>
                </Imwrap>
               

            </div>
        );
    }
}

export default Mainimage;