import { useTranslation } from "react-i18next";
import { styled } from "styled-components";

import { TMDBSearchMovieResponse } from "../tmdb/common";

import FlexCol from "./common/FlexCol";
import PageSwitcher from "./PageSwitcher";
import SearchResult from "./SearchResult";

const Grid = styled.div`
    display: grid;
    grid-template-rows: 1fr auto;
    padding: 16px;
`;

const List = styled(FlexCol)`
    gap: 16px;
`;

const NoResults = styled.div`
    margin: auto;
`;

interface Props {
    data?: TMDBSearchMovieResponse;
    onSelect?: (movieId: number) => void;
    onSwitchPage?: (page: number) => void;
}

export default function SearchResults({ data, onSelect, onSwitchPage }: Props) {
    const { t } = useTranslation();

    if (!data || data.total_results === 0) {
        return <NoResults>{t("no_results")}</NoResults>;
    }

    return (
        <Grid>
            <List>
                {data.results?.map((v) => (
                    <SearchResult key={v.id} data={v} onSelect={onSelect} />
                ))}
            </List>
            <PageSwitcher current={data.page} last={data.total_pages} onSwitch={onSwitchPage} />
        </Grid>
    );
}
