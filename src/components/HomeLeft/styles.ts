import styled from "styled-components";

export const Left = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Intro = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 50%;
    height: 50%;

    p {
        font-size: 20px;
    }
     
    h1 {
        font-size: 70px;
    }

    button {
        background-color: #4649FF;
        border: 1px solid #4649FF;
        border-radius: 11px;
        width: 130px;
        height: 56px;
        color: #FFFF;
        cursor: pointer;
        font-size: 16px;
        transition: all 0.5s ease-out;

        &:hover {
            transform: scale(1.1);
        }
    }

`