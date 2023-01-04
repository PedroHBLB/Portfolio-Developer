import React from 'react';

import { Left, Intro } from './styles';

const HomeLeft: React.FC = () => {
    return (
        <Left>
            <Intro>
                <div>
                    <p>Hello Welcome</p>
                    <h1>I'm Pedro <br></br>Web Developer</h1>
                </div>
                <p>Sou desenvolvedor focado em desenvolvimento web e mobile,
                    acredito que a tecnologia pode moldar coisas extraordinárias
                    e isso me motiva a desenvolver produtos excepcionais
                </p>
                <button>Hire me</button>
            </Intro>
        </Left>
    );
}

export default HomeLeft;