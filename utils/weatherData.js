const request = require('request');

const openWeatherMap = {
    BASE_URL:"http://api.openweathermap.org/data/2.5/weather?q=",
    SECRET_KEY:"1f2ecbf26df8910f0f25f9d707c70c51"
}

const weatherData = (address, callback) => {
    const url =
      openWeatherMap.BASE_URL +
      encodeURIComponent(address) +
      "&APPID=" +
      openWeatherMap.SECRET_KEY;
    console.log(url);

    request({ url, json: true }, (error, data) => {
      if (error) {
        callback(true, "Unable to fetch data, Please try again. " + error);
      }
      callback(false, data?.body);
    });
  };
  
  module.exports = weatherData;