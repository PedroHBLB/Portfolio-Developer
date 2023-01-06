import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

import { Container } from './styles';
import Sobre from '../../components/Sobre/index';
import Skills from '../../components/Skills/index';
import Projects from '../../components/Projects/index';

const About: React.FC = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    return (
        <Container data-aos="fade-up">
            <Sobre />
            <Skills />
            <Projects />
        </Container>
    );
}

export default About;