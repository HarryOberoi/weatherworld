import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import CityDataLoading from "./CityDataLoading";

export const API_KEY = process.env.REACT_APP_API_KEY;

const CityWeather = () => {
 // const sunCloudImage = "/images/sunCloud.png";
  const humidityImage = "/images/humidity.png";
  const temperatureImage = "/images/temperature.png";
  const windImage = "/images/wind.png";
 // const [image, setImage] = useState();
  const { cityName } = useParams();
  const [cityWeather, setCityWeather] = useState();
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {


    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then(
        (data) => {
          if(data.cod === "404") {
            console.log("City not found");
          }else {
            setCityWeather(data)
            setIsLoading(false);
          }
      })
      .catch((err) => console.error(err));

   } 
  , [cityName]);

 // console.log("cityWeather " + cityWeather);

  /*   if(cityWeather && cityWeather.weather[0].icon === "02n" ) {
    console.log("cityWeather " +cityWeather.weather[0].icon);
  setImage(sunCloudImage);
}
 */
  //|| cityWeather.weather[0].icon === "01n")
  /*else if (
  cityWeather.weather[0].icon === "10d" ||
  cityWeather.weather[0].icon === "10n"
) {
  setImage(rainImage);
}else if (
  cityWeather.weather[0].icon === "13d" ||
  cityWeather.weather[0].icon === "13n"
) {
  setImage(snowImage);
}else if (
  cityWeather.weather[0].icon === "09d" ||
  cityWeather.weather[0].icon === "09n" ||
  cityWeather.weather[0].icon === "50d" ||
  cityWeather.weather[0].icon === "50n"
) {
  setImage(drizzleImage);
}else if (
  cityWeather.weather[0].icon === "11d" ||
  cityWeather.weather[0].icon === "11n"
) {
  setImage(thunderstormImage);
}else {
  setImage(cloudImage);
}*/

  return ( !isLoading && cityWeather ? (
    <div className="city-main">
      <img
        className="sunCloud-icon"
        src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`}
        alt=""
      />
      <div className="image-description">
        {cityWeather.weather[0].description}
      </div>
      <div className="temperature">{cityWeather.main.temp}°c</div>
      <div className="location">{cityWeather.name}</div>
      <div className="container">
        <div className="sub-container">
          <img className="temperature-icon" src={temperatureImage} alt="" />
          <div className="data">
            <div className="element1">Min {cityWeather.main.temp_min} ° C</div>
            <div className="element2">Max {cityWeather.main.temp_max} ° C</div>
          </div>
        </div>
        <div className="sub-container">
          <img className="wind-icon" src={windImage} alt="" />
          <div className="data">
            <div className="element1">{cityWeather.wind.speed} km/h</div>
            <div className="element2">WindSpeed</div>
          </div>
        </div>
        <div className="sub-container">
          <img className="humidity-icon" src={humidityImage} alt="" />
          <div className="data">
            <div className="element1">{cityWeather.main.humidity} %</div>
            <div className="element2">Humidity</div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <CityDataLoading />
  ));
};

export default CityWeather;
