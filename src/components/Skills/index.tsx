import React from 'react';

import { SkillsMe } from './styles';

import Html from '../../assets/html.svg';
import Javascript from '../../assets/javascript.svg';
import Reactx from '../../assets/react.svg';
import Css from '../../assets/css.svg';
import Typescript from '../../assets/typescript.svg';

const Skills: React.FC = () => {
    return (
        <SkillsMe>
            <img className='my-skills' src={Html} alt='html' />
            <img className='my-skills' src={Css} alt='css' />
            <img className='my-skills' src={Javascript} alt='javascript' />
            <img className='my-skills' src={Typescript} alt='typescript' />
            <img className='my-skills' src={Reactx} alt='react' />
        </SkillsMe>
    );
}

export default Skills;