import styled from 'styled-components';

export const SkillsMe = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: #EEF4FF;
    width: 70%;
    height: 20%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 11px;

    .my-skills {
        width: 10%;
        cursor: pointer;
        transition: all 0.5s ease-out;

        &:hover {
            transform: scale(1.2);
        }
    }
`