import { styled } from "styled-components";

const Button = styled.button`
    color: var(--text-light);
    background-color: var(--input-idle);

    border: none;
    border-radius: 8px;

    font-size: 16px;
    font-weight: unset;

    padding: 8px;

    &:hover {
        background-color: var(--input-hover);
        cursor: pointer;
    }

    &:active {
        background-color: var(--input-active);
    }
`;

export default Button;
