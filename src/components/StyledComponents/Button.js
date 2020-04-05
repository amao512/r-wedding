import styled from "styled-components";

const Button = styled.button`
    outline: none;
    background-color: #ff2f92;
    color: #fff;
    padding: 6px 20px;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;
    border: 2px solid #ff2f92;
    cursor: pointer;
    transition: all .3s ease;
    border-radius: 4px;
    &:hover {
        background: #fff;
        color: #ff2f92;
    }
`

export default Button;