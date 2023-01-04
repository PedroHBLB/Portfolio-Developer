import React from "react";

import { Right } from './styles';
import Rosto from '../../assets/rosto.png';

const HomeRight: React.FC = () => {
    return(
        <Right>
            <img src={Rosto} alt='rosto' />
        </Right>
    );
}

export default HomeRight;