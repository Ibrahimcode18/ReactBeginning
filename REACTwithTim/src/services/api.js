
const API_KEY = "bd03cf9f651f37ccfcc4ba2e7a9df022";
const BASE_URL = "https://api.themoviedb.org/3"  // https://www.domain.com


export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
}


export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results
}