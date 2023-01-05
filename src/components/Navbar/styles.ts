import styled from 'styled-components';

export const Nav = styled.header `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding-top: 10px;

    h1 {
        color: #4649FF;
        cursor: pointer;
    }
`
export const Container = styled.div `
    display: flex;
    flex-direction: row;
    width: 35%;
    justify-content: end;
    align-items: center;
`

export const Items = styled.nav `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;

    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
    }

    li {
        cursor: pointer;
        list-style-type: none;
        font-weight: bold;
        color: #1E255E;
        text-decoration: none;
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #4649FF;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
    }
`

export const Button = styled.button `
    width: 130px;
    height: 42px;
    boder: 2px solid;
    border-radius: 4px;
    border-color: #4649FF;
    background-color: transparent;
    cursor: pointer;
    color: #4649FF;
    text-decoration: none;
    transition: all 0.3s ease-out;

    &:hover {
        transform: scale(1.1);
    }
`