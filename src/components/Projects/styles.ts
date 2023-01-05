import styled from 'styled-components';

export const ProjectsMe = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    align-items: center;

    .my-projects {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 357px;
        height: 250px;
        background-color: #4649FF;
        border-radius: 10px;
        cursor: pointer;
    }

    img {
        border-radius: 10px;
        width: 90%;
        height: 90%;
        transition: all 0.5s ease-out;

        &:hover {
            transform: scale(1.05);
        }
    }
`