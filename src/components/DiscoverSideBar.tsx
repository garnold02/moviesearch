import { useState } from "react";
import { styled } from "styled-components";
import { useTranslation } from "react-i18next";

import { SortBy, TMDBDiscoverMovieParams } from "../tmdb/discoverMovie";

import GenreConfig from "./GenreConfig";
import SortConfig from "./SortConfig";
import Button from "./common/Button";

const Container = styled.div`
    padding: 16px;
    padding-top: 0;

    border-bottom: 2px solid var(--border);

    @media (min-width: 640px) {
        border-bottom: unset;
        border-right: 2px solid var(--border);
    }
`;

const SearchButton = styled(Button)`
    margin-top: 16px;
    width: 100%;
`;

interface Props {
    onSubmit: (params: TMDBDiscoverMovieParams) => void;
}

export default function DiscoverSideBar({ onSubmit }: Props) {
    const { t } = useTranslation();

    const [genres, setGenres] = useState("");
    const [sort, setSort] = useState<SortBy>("popularity.desc");

    const onClick = () => {
        onSubmit({ with_genres: genres, sort_by: sort });
    };

    return (
        <Container>
            <GenreConfig onChange={setGenres} />
            <SortConfig onChange={setSort} />
            <SearchButton onClick={onClick}>{t("search")}</SearchButton>
        </Container>
    );
}
