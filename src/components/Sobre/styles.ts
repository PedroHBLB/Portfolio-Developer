import styled from 'styled-components';

export const SobreMe = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;

    h1 {
        color: ${props => props.theme.colors.text};
        font-size: 56px;
        font-weight: bold;
    }

    p {
        text-align: center;
    }
`