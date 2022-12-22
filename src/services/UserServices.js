const API_KEY = process.env.REACT_APP_WEATHER_KEY;
console.log(API_KEY);

export async function getAllWeather() {
  try {
    const response = await fetch("/api/users");
    return await response.json();
  } catch (error) {
    return [];
  }
}
