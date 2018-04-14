import React, { Component } from 'react';
import Button from '../../shared/Button';
import Footer from '../footer';
import ButtonDisabled from '../../shared/ButtonDisabled';
import Container from './Container';
import Header from '../header/Header';
import styled from 'styled-components';

const Lorem = styled.p`
    color: #090909;
    padding: 1em;
    max-width: 800px;
    margin: auto;
`;

class Home extends Component {

    render() {

        return (
            <div>
                <Header />
                <Lorem>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium asperiores aspernatur, doloribus facilis
                    fugit labore odit porro, quae, quam quod ratione sapiente sequi unde veniam. Dolore minus odit perferendis?
                    Accusamus ad alias amet doloremque earum, facilis illum nihil omnis perferendis placeat possimus quae quisquam
                    recusandae sed similique sint soluta. Ad aperiam aut consequuntur corporis cupiditate debitis deserunt distinctio
                    dolor ea enim eos et eum id illum iste itaque iure laboriosam libero maiores modi molestias natus nihil non numquam
                    officia perspiciatis quas quod, recusandae repellat sint soluta tempore veniam voluptatibus. Alias atque aut
                    doloribus ducimus pariatur sit tempore. Fugiat, provident.</Lorem>
                <Container>

                    <Button primary>test</Button>
                    <Button>test</Button>
                    <ButtonDisabled disabled>test</ButtonDisabled>
                </Container>
                <Footer />
            </div>
        );

    }

}

export default Home;
