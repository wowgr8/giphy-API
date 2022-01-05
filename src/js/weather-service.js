export default class WeatherService {  
  static getWeather(search) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      // const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
      const url = `http://api.giphy.com/v1/gifs/search?&api_key=${process.env.API_KEY}&q=${search}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}