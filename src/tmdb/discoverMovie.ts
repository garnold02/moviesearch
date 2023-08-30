import { tmdbApiCall } from "./api";
import { TMDBSearchMovieResponse } from "./common";

export interface TMDBDiscoverMovieParams {
    certification?: string;
    "certification.gte"?: string;
    "certification.lte"?: string;
    certification_country?: string;
    include_adult?: boolean;
    include_video?: boolean;
    language?: string;
    page?: number;
    primary_release_year?: number;
    "primary_release_date.gte"?: string;
    "primary_release_date.lte"?: string;
    region?: string;
    "release_date.gte"?: string;
    "release_date.lte"?: string;
    sort_by?: SortBy;
    "vote_average.gte"?: number;
    "vote_average.lte"?: number;
    "vote_count.gte"?: number;
    "vote_count.lte"?: number;
    watch_region?: string;
    with_cast?: string;
    with_companies?: string;
    with_crew?: string;
    with_genres?: string;
    with_keywords?: string;
    with_origin_country?: string;
    with_original_language?: string;
    with_original_people?: string;
    with_release_type?: number;
    "with_runtime.gte"?: number;
    "with_runtime.lte"?: number;
    with_watch_monetization_types?: string;
    with_watch_providers?: string;
    without_companies?: string;
    without_genres?: string;
    without_keywords?: string;
    without_watch_providers?: string;
    year?: number;
}

export type SortBy =
    | "popularity.asc"
    | "popularity.desc"
    | "revenue.asc"
    | "revenue.desc"
    | "primary_release_date.asc"
    | "primary_release_date.desc"
    | "vote_average.asc"
    | "vote_average.desc"
    | "vote_count.asc"
    | "vote_count.desc";

export async function tmdbDiscoverMovie(
    params: TMDBDiscoverMovieParams
): Promise<TMDBSearchMovieResponse> {
    const res = await tmdbApiCall("discover/movie", params);
    return res as TMDBSearchMovieResponse;
}
