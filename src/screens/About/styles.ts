import styled from 'styled-components';

export const Container = styled.header `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    width: 100%;
`

export const Sobre = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;

    h1 {
        color: #1E255E;
        font-size: 56px;
        font-weight: bold;
    }

    p {
        text-align: center;
    }
`
