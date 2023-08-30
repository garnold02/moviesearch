import { useState } from "react";
import { styled } from "styled-components";

const OuterBox = styled.div`
    width: 24px;
    height: 24px;

    background-color: var(--input-idle);
    border-radius: 4px;

    flex-grow: 0;
    flex-shrink: 0;

    &:hover {
        background-color: var(--input-hover);
        cursor: pointer;
    }

    &:active {
        background-color: var(--input-active);
    }
`;

const InnerBox = styled.div`
    width: 14px;
    height: 14px;

    position: relative;
    left: 5px;
    top: 5px;

    background-color: var(--accent-idle);
    border-radius: 4px;
`;

interface Props {
    checked?: boolean;
    onChange?: (value: boolean) => void;
}

export default function CheckBox({ checked, onChange }: Props) {
    const [pressed, setPressed] = useState(checked ? true : false);

    const onClick = () => {
        if (onChange) onChange(!pressed);
        setPressed(!pressed);
    };

    return (
        <OuterBox onClick={onClick}>
            <InnerBox style={{ display: pressed ? "block" : "none" }} />
        </OuterBox>
    );
}
