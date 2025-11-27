const APIKEY = import.meta.env.VITE_API_KEY;

// export const getPopularMovies = async () =>{
//     const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
//     const data = await response.json();
//     return data.results;
// };
// export const searchMovies = async (query) =>{
//     const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
//     const data = await response.json();
//     return data.results;
// };

export const getCityGeoData = async (city: String) =>{
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIKEY}`)
    const data = await response.json();
    return data[0];
}
export const getCityWeather = async (lat: string, lon: string) =>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`);
    const data = await response.json();
    return data;
}