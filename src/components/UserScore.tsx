import { useTranslation } from "react-i18next";
import { styled } from "styled-components";

import Centered from "./common/Centered";
import FlexCol from "./common/FlexCol";

const Container = styled(FlexCol)`
    align-items: center;
    gap: 8px;
`;

const Progress = styled(Centered)<{ $value: number }>`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: radial-gradient(closest-side, var(--background-light) 76%, transparent 80% 100%),
        conic-gradient(var(--accent-idle) ${(props) => `${props.$value}%`}, var(--border) 0);
`;

interface Props {
    value: number;
}

export default function UserScore({ value }: Props) {
    if (!value || Number.isNaN(value)) {
        return <></>;
    }

    const { t } = useTranslation();
    const content = `${Math.round(value * 10)}%`;

    return (
        <Container>
            <Progress $value={value * 10}>{content}</Progress>
            <span>{t("user_score")}</span>
        </Container>
    );
}
