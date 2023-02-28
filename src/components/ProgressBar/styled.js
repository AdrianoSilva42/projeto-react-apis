import styled from "styled-components";

export const LabelStyle = styled.div`
    height: 21px;
    width: 90%;
    padding: 5px;
    background-color: #ccc;
    display: flex;
    border-radius: 20px;

    --progress: ${(props) => props.progresso}%;

    ::before{
        content: '';
        width: calc(var(--progress) * 1) ;
        background-color: green;
        border-radius: 20px;
    }
`;