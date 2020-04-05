import styled from "styled-components";

const InputForm = styled.input`
    padding: 6px 0 6px 0;
    margin: 5px 0;
    border: none;
    color: #222;
    font-family: var(--linksFontFamily);
    font-size: 16px;
    width: 100%;
    background: none;
    border-bottom: 2px solid ${props => props.background ? 'red' : '#d3d3d3'};
    outline: none;
    transition: all .3s ease;
    &:focus {
        border-color: var(--inputBorderColor);
    }
`;

export default InputForm;