import { styled } from "styled-components";

const TextAction = styled.span`
    color: var(--accent-idle);
    user-select: none;

    &:hover {
        color: var(--accent-hover);
        text-decoration: underline;
        cursor: pointer;
    }

    &:active {
        color: var(--accent-active);
    }
`;

export default TextAction;
