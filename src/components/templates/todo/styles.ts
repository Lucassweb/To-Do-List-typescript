import styled from "styled-components";


export const Formulario = styled.div`
    max-width: 740px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;


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
        border-radius: 5px;
    }

    li {
        color: white;
    }
    
`

export const listItem = styled.ul`
    margin-right: 13em;
    display: flex;
    flex-direction: column;
`

export const itemList = styled.li`
    list-style: none;
    color: yellow !important;
    font-weight: bold;
    padding: 5px;
    margin-bottom: 5px;
    font-size: 22px;
    font-family:'Kablammo', cursive;
`