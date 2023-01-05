import React from 'react';

import { Container } from './styles';
import Sobre from '../../components/Sobre/index';
import Skills from '../../components/Skills/index';
import Projects from '../../components/Projects/index';

const About: React.FC = () => {
    return (
        <Container>
            <Sobre />
            <Skills />
            <Projects />
        </Container>
    );
}

export default About;