import { tmdbConfigurationDetails } from "./configurationDetails";

export async function tmdbPosterSource(path: string, size: number): Promise<string> {
    const config = await tmdbConfigurationDetails();
    const bestSize = getBestSize(config.images.poster_sizes, size);
    return `${config.images.secure_base_url}${bestSize}${path}`;
}

export async function tmdbProfileSource(path: string, size: number): Promise<string> {
    const config = await tmdbConfigurationDetails();
    const bestSize = getBestSize(config.images.profile_sizes, size);
    return `${config.images.secure_base_url}${bestSize}${path}`;
}

function getBestSize(available: string[], preferred: number): string {
    const sizes = available
        .filter((v) => v.charAt(0) === "w")
        .map((v) => v.substring(1))
        .map((v) => Number.parseInt(v))
        .sort((a, b) => a - b);

    for (const size of sizes) {
        if (size >= preferred) {
            return `w${size}`;
        }
    }

    return `w${sizes[sizes.length - 1]}`;
}
