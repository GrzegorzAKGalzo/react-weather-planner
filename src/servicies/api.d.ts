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
    // return {
    // "coord": {
    //     "lon": -0.1257,
    //     "lat": 51.5085
    // },
    // "weather": [
    //     {
    //         "id": 804,
    //         "main": "Clouds",
    //         "description": "overcast clouds",
    //         "icon": "04d"
    //     }
    // ],
    // "base": "stations",
    // "main": {
    //     "temp": 12.78,
    //     "feels_like": 12.41,
    //     "temp_min": 11.95,
    //     "temp_max": 13.33,
    //     "pressure": 1013,
    //     "humidity": 88,
    //     "sea_level": 1013,
    //     "grnd_level": 1009
    // },
    // "visibility": 10000,
    // "wind": {
    //     "speed": 5.66,
    //     "deg": 220
    // },
    // "clouds": {
    //     "all": 100
    // },
    // "dt": 1764246588,
    // "sys": {
    //     "type": 2,
    //     "id": 2075535,
    //     "country": "GB",
    //     "sunrise": 1764229100,
    //     "sunset": 1764259102
    // },
    // "timezone": 0,
    // "id": 2643743,
    // "name": "London",
    // "cod": 200
// };
}