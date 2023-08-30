import { useTranslation } from "react-i18next";
import { styled } from "styled-components";

import BottomBar from "./common/BottomBar";
import FlexRow from "./common/FlexRow";
import GitHub from "./GitHub";

const Container = styled(FlexRow)`
    align-items: center;
    gap: 8px;
`;

const Text = styled.span`
    color: var(--text-dark);
`;

export default function Footer() {
    const { t } = useTranslation();

    return (
        <BottomBar>
            <Container>
                <GitHub />
                <Text>{t("footer_message")}</Text>
            </Container>
        </BottomBar>
    );
}
