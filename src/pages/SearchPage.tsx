import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { styled } from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";

import { tmdbSearchMovie } from "../tmdb/searchMovie";
import { TMDBSearchMovieResponse } from "../tmdb/common";

import Footer from "../components/Footer";
import SearchResults from "../components/SearchResults";
import MaybeModal from "../components/MaybeModal";
import Loading from "../components/Loading";
import TopBar from "../components/common/TopBar";
import SearchBar from "../components/SearchBar";

const Grid = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
`;

const Content = styled.div`
    display: grid;

    @media (min-width: 512px) {
        border-left: 10vw solid var(--background-dark);
        border-right: 10vw solid var(--background-dark);
    }

    @media (min-width: 1024px) {
        border-left: 20vw solid var(--background-dark);
        border-right: 20vw solid var(--background-dark);
    }
`;

export default function SearchPage() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") ?? "";

    const { i18n } = useTranslation();
    const navigate = useNavigate();

    const [results, setResults] = useState<TMDBSearchMovieResponse>();
    const [page, setPage] = useState(1);
    const [movieId, setMovieId] = useState<number>();

    useEffect(() => {
        tmdbSearchMovie({ query: query, language: i18n.language, page: page }).then(setResults);
    }, [query, page, i18n.language]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [results]);

    const onSearch = (query: string) => {
        navigate({
            pathname: "/search",
            search: `?${new URLSearchParams({ q: query }).toString()}`,
        });
    };

    return (
        <>
            <Grid>
                <TopBar>
                    <SearchBar
                        key={window.location.search}
                        defaultValue={query}
                        onSearch={onSearch}
                    />
                </TopBar>
                <Content>
                    {results ? (
                        <SearchResults
                            data={results}
                            onSwitchPage={setPage}
                            onSelect={setMovieId}
                        />
                    ) : (
                        <Loading />
                    )}
                </Content>
                <Footer />
            </Grid>
            <MaybeModal movieId={movieId} onClose={() => setMovieId(undefined)} />
        </>
    );
}
