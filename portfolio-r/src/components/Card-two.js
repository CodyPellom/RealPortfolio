import React, { Component } from 'react';
import styled from 'styled-components'

const Imwrap = styled.div`
img {
    max-width: 400px;
    max-height: 350px;
    border: solid;
    margin-top: 5%;
}
p{
    max-width: 400px;
    border: solid 2;
    background-color: white;
    margin-left: 50vh;
    background-color: white;

}
`


class CardTwo extends Component {
    render() {
        return (
            <div>
                <Imwrap>
                    <div data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-once="true">

                        <img className="cardStyle" src="https://i.imgur.com/qoW1qiZ.jpg" />
                    <p>At General Assembly, I coded several full stack applications including a BlackJack game, and a CRUD stack called "Confessions".</p>

                    </div>
                </Imwrap>
            </div>



        );
    }
}



export default CardTwo
