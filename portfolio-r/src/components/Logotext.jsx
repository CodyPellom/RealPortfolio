import React, { Component } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`

h1 {
    padding-top: 15%;
    margin-top: 15%;
    font-size: 60px;
}

`

class Logotext extends Component {


    render() {
        return (
            <div>
                <Wrapper>
                    <div class="tlt">
                        
                            <h1>Hi! My name is Cody! I'm a web
                                developer who lives in Atlanta, GA.
                                This is the home of a few of my creations.
                            </h1>
                        

                    </div>
                </Wrapper>
            </div>
        );
    }
}

export default Logotext;