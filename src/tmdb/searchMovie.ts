import { tmdbApiCall } from "./api";
import { TMDBSearchMovieResponse } from "./common";

export interface TMDBSearchMovieParams {
    query: string;
    include_adult?: boolean;
    language?: string;
    primary_release_year?: string;
    page?: number;
    region?: string;
    year?: string;
}

export async function tmdbSearchMovie(
    params: TMDBSearchMovieParams
): Promise<TMDBSearchMovieResponse> {
    const res = await tmdbApiCall("search/movie", params);
    return res as TMDBSearchMovieResponse;
}
