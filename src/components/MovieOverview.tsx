import { styled } from "styled-components";
import { useTranslation } from "react-i18next";

import SectionHeader from "./common/SectionHeader";

const Paragraph = styled.p`
    text-align: justify;
`;

interface Props {
    text?: string;
}

export default function MovieOverview({ text }: Props) {
    const { t } = useTranslation();

    if (!text || text === "") {
        return <></>;
    }

    return (
        <div>
            <SectionHeader>{t("overview")}</SectionHeader>
            <Paragraph>{text}</Paragraph>
        </div>
    );
}
