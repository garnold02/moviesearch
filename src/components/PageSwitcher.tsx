import { css, styled } from "styled-components";
import TextAction from "./common/TextAction";
import FlexRow from "./common/FlexRow";

const Container = styled(FlexRow)`
    justify-content: center;
    gap: 8px;
`;

const Button = styled(TextAction)<{ $current?: boolean }>`
    min-width: 8px;

    ${(props) => {
        if (!props.$current) {
            return css`
                color: var(--text-light);
            `;
        } else {
            return "";
        }
    }}
`;

const Separator = styled.span`
    user-select: none;
`;

interface Props {
    current: number;
    last: number;
    onSwitch?: (page: number) => void;
}

export default function PageSwitcher({ current, last, onSwitch }: Props) {
    const clast = Math.min(last, 500);
    const min = Math.max(1, current - 2);
    const max = Math.min(current + 2, clast);

    const toPrev = () => {
        if (onSwitch) onSwitch(current - 1);
    };

    const toPage = (page: number) => {
        if (onSwitch) onSwitch(page);
    };

    const toNext = () => {
        if (onSwitch) onSwitch(current + 1);
    };

    const elements = [];

    if (current !== 1) {
        elements.push(
            <Button key={"prev"} onClick={toPrev}>
                {"<"}
            </Button>
        );
    }

    if (min !== 1) {
        elements.push(
            <Button key={1} onClick={() => toPage(1)} $current={current == 1}>
                1
            </Button>
        );

        if (min !== 2) {
            elements.push(<Separator key={"dl"}>...</Separator>);
        }
    }

    for (let i = min; i <= max; i++) {
        elements.push(
            <Button key={i} onClick={() => toPage(i)} $current={current == i}>
                {i}
            </Button>
        );
    }

    if (max !== clast) {
        if (max !== clast - 1) {
            elements.push(<Separator key={"dr"}>...</Separator>);
        }

        elements.push(
            <Button key={clast} onClick={() => toPage(clast)} $current={current == clast}>
                {clast}
            </Button>
        );
    }

    if (current !== clast) {
        elements.push(
            <Button key={"next"} onClick={() => toNext()}>
                {">"}
            </Button>
        );
    }

    return <Container>{elements}</Container>;
}
