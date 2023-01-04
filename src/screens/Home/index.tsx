import React from "react";

import Navbar from "../../components/Navbar";
import HomeLeft from "../../components/HomeLeft";
import HomeRight from "../../components/HomeRight";

import { HomeMenu, Container } from "./styles";

const Home: React.FC = () => {
    return (
        <HomeMenu>
            <Navbar />
            <Container>
                <HomeLeft />
                <HomeRight />
            </Container>
        </HomeMenu>
    );
}

export default Home;