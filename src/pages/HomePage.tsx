import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { styled } from "styled-components";

import SearchBar from "../components/SearchBar";
import TextAction from "../components/common/TextAction";
import Footer from "../components/Footer";
import FlexCol from "../components/common/FlexCol";

const Grid = styled.div`
    display: grid;
    grid-template-rows: 1fr auto;
    place-items: center;
`;

const Content = styled(FlexCol)`
    justify-content: center;
    align-items: center;
    gap: 16px;
`;

const Actions = styled.div`
    text-align: center;
`;

export default function HomePage() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const onSearch = (query: string) => {
        navigate({
            pathname: "/search",
            search: `?${new URLSearchParams({ q: query }).toString()}`,
        });
    };

    const switchLanguage = () => {
        switch (i18n.resolvedLanguage) {
            case "en": {
                i18n.changeLanguage("hu");
                break;
            }

            case "hu": {
                i18n.changeLanguage("en");
                break;
            }
        }
    };

    const goToDiscover = () => {
        navigate("/discover");
    };

    return (
        <Grid>
            <Content>
                <SearchBar onSearch={onSearch} />
                <Actions>
                    {t("available_in")}{" "}
                    <TextAction onClick={switchLanguage}>{t("other_language")}</TextAction>
                    <br />
                    <TextAction onClick={goToDiscover}>{t("detailed_search")}</TextAction>
                </Actions>
            </Content>
            <Footer />
        </Grid>
    );
}
