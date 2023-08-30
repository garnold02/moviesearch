const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "7868604a8885a8e26fda18afc2fb021c";

export async function tmdbApiCall(route: string, params: any): Promise<any> {
    const url = makeURL(route, params);
    const res = await fetch(url);
    return await res.json();
}

function makeURL(route: string, params: any): string {
    const searchParams = new URLSearchParams(params);
    searchParams.set("api_key", apiKey);
    return `${baseUrl}/${route}?${searchParams.toString()}`;
}
