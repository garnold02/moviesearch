import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { TMDBDiscoverMovieParams, tmdbDiscoverMovie } from "../tmdb/discoverMovie";
import { TMDBSearchMovieResponse } from "../tmdb/common";

import Footer from "../components/Footer";
import DiscoverSideBar from "../components/DiscoverSideBar";
import MaybeModal from "../components/MaybeModal";
import SearchResults from "../components/SearchResults";
import Loading from "../components/Loading";

const Grid = styled.div`
    display: grid;
    grid-template-rows: 1fr auto;
`;

const Content = styled.div`
    display: grid;
    grid-auto-flow: row;

    @media (min-width: 640px) {
        grid-auto-flow: column;
        grid-template-columns: 256px 1fr;
    }
`;

const Border = styled.div`
    display: grid;

    @media (min-width: 1024px) {
        border-left: 10vw solid var(--background-dark);
        border-right: 10vw solid var(--background-dark);
    }

    @media (min-width: 1536px) {
        border-left: 15vw solid var(--background-dark);
        border-right: 15vw solid var(--background-dark);
    }
`;

export default function DiscoverPage() {
    const { i18n } = useTranslation();

    const [params, setParams] = useState<TMDBDiscoverMovieParams>({});
    const [results, setResults] = useState<TMDBSearchMovieResponse>();
    const [page, setPage] = useState(1);
    const [movieId, setMovieId] = useState<number>();

    useEffect(() => {
        tmdbDiscoverMovie({ ...params, language: i18n.language, page: page }).then(setResults);
    }, [params, page]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [results]);

    const onSubmit = (params: TMDBDiscoverMovieParams) => {
        setParams(params);
        setPage(1);
    };

    return (
        <>
            <Grid>
                <Content>
                    <DiscoverSideBar onSubmit={onSubmit} />
                    <Border>
                        {results ? (
                            <SearchResults
                                data={results}
                                onSelect={setMovieId}
                                onSwitchPage={setPage}
                            />
                        ) : (
                            <Loading />
                        )}
                    </Border>
                </Content>
                <Footer />
            </Grid>
            <MaybeModal movieId={movieId} onClose={() => setMovieId(undefined)} />
        </>
    );
}
