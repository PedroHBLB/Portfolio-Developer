import React, { useContext } from "react";

import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';
import HomeLeft from "../../components/HomeLeft";
import HomeRight from "../../components/HomeRight";

import { HomeMenu, Container, Nav, ContainerNav, Items, Button } from "./styles";

interface Props {
    toggleTheme(): void
}

const Home: React.FC<Props> = ({toggleTheme}) => {
    const { title } = useContext(ThemeContext);

    return (
        <HomeMenu>
            <Nav>
            <h1>Pedro</h1>
            <ContainerNav>
                <Items>
                    <ul>
                        <li>Home</li>
                        <li>Sobre mim</li>
                        <li>Cursos</li>
                        <li>Contato</li>
                    </ul>
                    <Button>Enquiry</Button>
                </Items>
                <Switch 
                    onChange={toggleTheme}
                    checked={title === 'dark'}
                    checkedIcon={title === 'light'}
                    uncheckedIcon={false}
                    height={10}
                    width={40}
                    handleDiameter={20}
                    offColor="#7B2869"
                    onColor="#FF7B54"
                />
            </ContainerNav>
        </Nav>
            <Container>
                <HomeLeft />
                <HomeRight />
            </Container>
        </HomeMenu>
    );
}

export default Home;