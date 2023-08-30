import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useTranslation } from "react-i18next";

import { TMDBMovieDetailsResponse, tmdbMovieDetails } from "../tmdb/movieDetails";
import { TMDBMovieCreditsResponse, tmdbMovieCredits } from "../tmdb/movieCredits";

import Centered from "./common/Centered";
import FlexCol from "./common/FlexCol";
import MovieOverview from "./MovieOverview";
import MovieCast from "./MovieCast";
import MovieDirector from "./MovieDirector";
import UserScore from "./UserScore";
import MoviePoster from "./MoviePoster";
import Loading from "./Loading";

const Container = styled.div`
    padding: 0 16px 0 16px;
`;

const Title = styled.h1`
    margin-top: 0;
    margin-bottom: 32px;
    font-size: 24px;
    font-weight: normal;
    text-align: center;
`;

const InfoGrid = styled(Centered)`
    gap: 16px;

    @media (min-width: 640px) {
        grid-template-columns: auto 1fr;
    }
`;

interface Props {
    movieId: number;
}

export default function MoviePage({ movieId }: Props) {
    const { i18n } = useTranslation();

    const [details, setDetails] = useState<TMDBMovieDetailsResponse>();
    const [credits, setCredits] = useState<TMDBMovieCreditsResponse>();

    useEffect(() => {
        tmdbMovieDetails(movieId, { language: i18n.language }).then(setDetails);
        tmdbMovieCredits(movieId, { language: i18n.language }).then(setCredits);
    }, [movieId]);

    if (!details || !credits) {
        return <Loading />;
    }

    return (
        <Container>
            <Title>{formatTitle(details)}</Title>

            <InfoGrid>
                <MoviePoster path={details.poster_path} />
                <FlexCol>
                    <UserScore value={details.vote_average} />
                    <MovieOverview text={details.overview} />
                </FlexCol>
            </InfoGrid>

            <MovieCast cast={credits.cast} />
            <MovieDirector crew={credits.crew} />
        </Container>
    );
}

function formatTitle(details: TMDBMovieDetailsResponse): string {
    const year = details.release_date?.split("-")[0];

    if (!year || year === "") {
        return details.title;
    }

    return `${details.title} (${year})`;
}
