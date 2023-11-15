import styled from "styled-components";

export const TextStyle = styled.div`
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonStyle = styled.div`
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border: 2px solid gray;
    border-radius: 5px;
    color: black;
    background-color: white;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
`;