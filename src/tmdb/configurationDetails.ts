import { tmdbApiCall } from "./api";

export interface TMDBConfigurationDetailsResponse {
    images: TMDBConfigurationImages;
    change_keys: string[];
}

export interface TMDBConfigurationImages {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: string[];
    logo_sizes: string[];
    poster_sizes: string[];
    profile_sizes: string[];
    still_sizes: string[];
}

export async function tmdbConfigurationDetails(): Promise<TMDBConfigurationDetailsResponse> {
    const res = await tmdbApiCall("configuration", {});
    return res as TMDBConfigurationDetailsResponse;
}
