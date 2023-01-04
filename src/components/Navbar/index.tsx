import React from 'react';
import { Nav, Container, Items, Button } from './styles';

const Navbar: React.FC = () => {
    return (
        <Nav>
            <h1>Pedro</h1>
            <Container>
                <Items>
                    <a href='#'>Home</a>
                    <a href='#'>About me</a>
                    <a href='#'>How it works</a>
                    <a href='#'>Services</a>
                    <a href='#'>Contact</a>
                </Items>
                {/* <Button>Enquiry</Button> */}
            </Container>
        </Nav>
    );
}

export default Navbar;