import styled from "styled-components";


export const Formulario = styled.div`
    max-width: 740px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 2px solid red;

    h1 {
        font-size: 4em;
        font-family:'Kablammo', cursive;
        color: white;
    }

    input {
        padding: 7px;
        border-radius: 5px;
        width: 100%;
        border: none;
        font-size: 15px;
        font-family:'Kablammo', cursive;
    }

    button {
        cursor: pointer;
        color: white;
        border: none;
        background-color: green;
        font-family:'Kablammo', cursive;
        margin-top: 2em;
        padding: 7px;
        width: 50%;
    }

    li {
        color: white;
    }
`