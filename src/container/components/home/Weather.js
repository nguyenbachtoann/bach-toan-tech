import React, { Component } from "react";
import Constants from "../../../constants/index";
import axios from "axios";
import { Icon } from "antd";

const WEATHER_URL_ASSET = "https://openweathermap.org/img/wn/";
const DATE_NAME = Constants.DATE_NAME;
class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: "",
        lng: ""
      },
      error: undefined,
      weatherData: undefined,
      resultData: {
        title: undefined,
        description: undefined,
        icon: undefined,
        tempC: undefined,
        tempF: undefined,
        date: undefined
      },
      isFetching: false,
      isGeoEnabled: true
    };
  }
  componentDidMount() {
    this.getLocation();
  }
  getLocation = () => {
    if (navigator.geolocation) {
      this.setState({
        isGeoEnabled: true
      });
      navigator.geolocation.getCurrentPosition(this.updatePosition);
    } else {
      this.setState({
        isGeoEnabled: false,
        error: "Geolocation is not supported by this browser."
      });
    }
  };
  getCurrentDateTime = () => {
    const { resultData } = this.state;
    const current = new Date();
    const date = current.getDate();

    resultData.date = DATE_NAME[date - 1];
    this.setState({
      resultData
    });
  };

  updatePosition = position => {
    const crd = position.coords;
    this.setState(
      {
        location: {
          lat: crd.latitude,
          lng: crd.longitude
        }
      },
      () => {
        this.getWeather();
      }
    );
  };

  calCelcius = () => {
    const { weatherData, resultData } = this.state;
    let celcius = Math.floor(weatherData.main.temp - 273.15);
    resultData.tempC = celcius;
    this.setState({
      resultData
    });
  };

  renderWeather() {
    this.calCelcius();
    this.getCurrentDateTime();
    const { weatherData, resultData } = this.state;
    const weather = weatherData.weather;
    if (weather.length > 0) {
      const firstCondition = weather[0];
      resultData.title = firstCondition.main;
      resultData.description = firstCondition.description;
      resultData.icon = firstCondition.icon;
      this.setState({
        resultData
      });
    }
  }

  getWeather = async () => {
    const { location } = this.state;
    const API_KEY = Constants.WEATHER_API;

    this.setState({
      isFetching: true
    });
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&appid=${API_KEY}`
      )
      .then(res => {
        console.log("location: ", res.data);
        setTimeout(() => {
          this.setState(
            {
              weatherData: res.data,
              isFetching: false
            },
            () => {
              this.renderWeather();
            }
          );
        }, 800);
      })
      .catch(err => {
        console.log("SS: ", err.status);
      });
  };

  render() {
    const { resultData, isFetching, isGeoEnabled, error } = this.state;
    return (
      <div id="weather-container">
        <span className="text-title-thin">Today Weather</span>
        <div className="weather-content">
          {isGeoEnabled === false ? (
            <div className="weather-description">
              <span className="content-span" title="weather-date">
                {error}
              </span>
            </div>
          ) : isFetching ? (
            <div className="weather-description">
              <Icon className="loading-data" type="loading" />
            </div>
          ) : resultData !== undefined ? (
            <div className="weather-description">
              <div className="weather-title-divide">
                <span className="content-span" title="weather-main-type">
                  {resultData.title}
                </span>
                <span className="content-span" title="weather-div">
                  |
                </span>
                <span className="content-span" title="weather-date">
                  {resultData.date}
                </span>
              </div>

              {resultData.icon !== undefined && (
                <img
                  src={`${WEATHER_URL_ASSET}${resultData.icon}@2x.png`}
                  alt={`weather-icon-${resultData.icon}`}
                  title={`weather-icon-${resultData.icon}`}
                />
              )}

              {resultData.tempC !== undefined && (
                <span
                  className="content-span  weather-celcius"
                  title="weather-deg"
                >
                  {resultData.tempC} &deg; C
                </span>
              )}

              <span className="content-span" title="weather-description">
                {resultData.description}
              </span>
            </div>
          ) : (
            <div className="weather-description">
              <span
                className="content-span"
                title="weather-description-no-data"
              >
                No Data
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Weather;
