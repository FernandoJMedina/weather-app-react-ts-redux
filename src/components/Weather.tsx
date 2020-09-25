import React from "react";
import { WeatherData } from "../store/types";

interface WeatherProps {
  data: WeatherData;
}

const Weather = ({ data }: WeatherProps) => {
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celcius = (data.main.temp - 273.15).toFixed(2);
  return (
    <section>
      <div>
        <h1>
          {data.name} - {data.sys.country}
        </h1>

        <div>
          <p>{data.weather[0].description}</p>

          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            alt=''
          />
        </div>

        <div>
          <p>temp</p>
          <div>
            <p>{data.main.temp}K</p>
            <p>
              {fahrenheit}
              <sup>&#8457;</sup>
            </p>
            <p>
              {celcius}
              <sup>&#8451;</sup>
            </p>
          </div>
        </div>

        <div>
          <p>humidity</p>
          <p>{data.main.humidity}</p>
        </div>
      </div>

      <div>
        <p>presure</p>
        <p>{data.main.pressure}</p>
      </div>

      <div>
        <div>
          <p>wind</p>
          <p>{data.wind.speed}m/s</p>
        </div>
      </div>
    </section>
  );
};

export default Weather;
