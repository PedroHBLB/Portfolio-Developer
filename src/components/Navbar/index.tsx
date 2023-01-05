import React from 'react';
import { Nav, Container, Items, Button } from './styles';

const Navbar: React.FC = () => {
    return (
        <Nav>
            <h1>Pedro</h1>
            <Container>
                <Items>
                    <ul>
                        <li>Home</li>
                        <li>Sobre mim</li>
                        <li>Cursos</li>
                        <li>Contato</li>
                    </ul>
                </Items>
                <Button>Enquiry</Button>
            </Container>
        </Nav>
    );
}

export default Navbar;