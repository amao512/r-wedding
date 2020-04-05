import styled from "styled-components";

const FormButton = styled.button`
    padding: 5px 24px;
    outline: none;
    cursor: pointer;
    margin: 15px 0;
    width: 100%;
    color: #fff;
    font-family: var(--linksFontFamily);
    font-weight: bold;
    font-size: 18px;
    border: 2px solid ${props => props.background || 'rgb(95, 143, 40)'};
    transition: all .3s ease;
    background-color: ${props => props.background || 'rgb(95, 143, 40)'};
    border-radius: 4px;
    &:hover {
        background-color: #fff;
        color: ${props => props.background || 'rgb(95, 143, 40)'};
    }
`;

export default FormButton;