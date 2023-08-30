import { tmdbApiCall } from "./api";

export interface TMDBMovieCreditsParams {
    language?: string;
}

export interface TMDBMovieCreditsResponse {
    id: number;
    cast: TMDBMovieCastMember[];
    crew: TMDBMovieCrewMember[];
}

export interface TMDBMovieCastMember {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}

export interface TMDBMovieCrewMember {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
}

export async function tmdbMovieCredits(
    movieId: number,
    params: TMDBMovieCreditsParams
): Promise<TMDBMovieCreditsResponse> {
    let res = await tmdbApiCall(`movie/${movieId}/credits`, params);
    return res as TMDBMovieCreditsResponse;
}
