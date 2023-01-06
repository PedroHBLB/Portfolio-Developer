import styled from 'styled-components';

export const HomeMenu = styled.div`
    height: 100vh;
`

export const Container = styled.div `
    display: flex;
    flex-direction: row;
`

export const Nav = styled.header `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding-top: 10px;
    background-color: ${props => props.theme.colors.background};

    h1 {
        color: ${props => props.theme.colors.button};
        cursor: pointer;
    }
`
export const ContainerNav = styled.div `
    display: flex;
    flex-direction: row;
    width: 40%;
    justify-content: end;
    align-items: center;

    img {
        width: 10%;
    }
`

export const Items = styled.nav `
    display: flex;
    flex-direction: row;
    align-items: center;

    ul {
        display: flex;
        gap: 2rem;
        width: 100%;
    }

    li {
        cursor: pointer;
        list-style-type: none;
        font-weight: bold;
        color: ${props => props.theme.colors.text};
        text-decoration: none;
        transition: all 0.5s;

        &:hover {
            color: #4649FF;
        }
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: ${props => props.theme.colors.button};
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
    border: 2px solid;
    border-radius: 4px;
    border-color: ${props => props.theme.colors.button};
    background-color: transparent;
    cursor: pointer;
    color: ${props => props.theme.colors.button};
    text-decoration: none;
    transition: all 0.3s ease-out;

    &:hover {
        transform: scale(1.1);
    }
`