import { styled } from "styled-components";

const OuterCircle = styled.div`
    width: 24px;
    height: 24px;

    background-color: var(--input-idle);
    border-radius: 50%;

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

const InnerCircle = styled.div`
    width: 14px;
    height: 14px;

    position: relative;
    left: 5px;
    top: 5px;

    background-color: var(--accent-idle);
    border-radius: 50%;
`;

interface Props {
    id: string;
    current: string;
    onClick: (id: string) => void;
}

export default function RadioButton({ id, current, onClick }: Props) {
    return (
        <OuterCircle onClick={() => onClick(id)}>
            <InnerCircle style={{ display: id === current ? "block" : "none" }} />
        </OuterCircle>
    );
}
