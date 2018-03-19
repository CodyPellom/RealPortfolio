import React, { Component } from 'react';
import styled from 'styled-components'

const Imwrap = styled.div`

img {
    max-width: 400px;
    max-height: 350px;
    border: solid;
    margin-top: 15%;

   
 
}
p{
    max-width: 400px;
    border: solid 2;
    background-color: white;
    margin-left: 50vh;


`


class MyCard extends Component {
    render() {
        return (
            <div>
                <Imwrap>
                    <div data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-once="true">

                        <img className="cardStyle" src="https://i.imgur.com/EJgQYH5.jpg"/>
                        <p>The web developers survival guide is the blog I run. I write primarily about new techniques for development and design and I also create tutorials easy enough for anyone to use. </p>


                    </div>
                </Imwrap>
            </div>



        );
    }
}



export default MyCard
