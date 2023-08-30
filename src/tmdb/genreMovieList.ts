import { tmdbApiCall } from "./api";

export interface TMDBGenreMovieListParams {
    language?: string;
}

export interface TMDBGenreMovieListResponse {
    genres: TMDBGenre[];
}

export interface TMDBGenre {
    id: number;
    name: string;
}

export async function tmdbGenreMovieList(
    params: TMDBGenreMovieListParams
): Promise<TMDBGenreMovieListResponse> {
    const res = await tmdbApiCall("genre/movie/list", params);
    return res as TMDBGenreMovieListResponse;
}
