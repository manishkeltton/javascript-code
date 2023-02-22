import "./App.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// action
import { fetchWeather } from "./actions/fetchWeather";
import LineChart from "./components/LineChart";

function App() {
  const [current, setCurrent] = useState(false);
  const [toggle, setToggle] = useState(false);

  const weatherSelector = useSelector((state) => state);
  const dispatch = useDispatch();
  const getWeatherInfoAction = () => dispatch(fetchWeather());

  const getWeatherInfo = (e) => {
    e.preventDefault();
    getWeatherInfoAction();
    setCurrent(true);
  };

  let details = "";
  if (weatherSelector.weatherinfo) {
    details = (
      <div className="details">
        <h1>Weather Details</h1>
        <p>
          <h2>Current Location ={" " + weatherSelector.weatherinfo.name}</h2>
          <h2>
            Description =
            {" " + weatherSelector.weatherinfo.weather[0].description}
          </h2>
          <h2>Temp min ={" " + weatherSelector.weatherinfo.main.temp_min}</h2>
          <h2>Temp Max ={" " + weatherSelector.weatherinfo.main.temp_max}</h2>
        </p>
      </div>
    );
  } else {
    details = <p>Loading</p>;
  }

  let moreDetails = "";
  if (weatherSelector.weatherinfo) {
    moreDetails = (
      <div className="details">
        <h1>More Details</h1>
        <p>
          <h2>Humidity ={" " + weatherSelector.weatherinfo.main.humidity}</h2>
          <h2>Wind Speed ={" " + weatherSelector.weatherinfo.wind.speed}</h2>
          <h2>Pressure ={" " + weatherSelector.weatherinfo.main.pressure}</h2>
          <h2>
            Sunrise ={" " + new Date(weatherSelector.weatherinfo.sys.sunrise)}
          </h2>
          <h2>
            Sunset ={" " + new Date(weatherSelector.weatherinfo.sys.sunset)}
          </h2>
        </p>
      </div>
    );
  } else {
    details = <p>Loading....</p>;
  }

  const toggleSet = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <React.Fragment>
      <div className="App">
        <header>
          <h1>React Redux WeatherApp</h1>
          <button onClick={toggleSet} className="btn">
            More details
          </button>
        </header>
        <main>
          <form onSubmit={getWeatherInfo}>
            <input className="btn" type="submit" value="Check Weather" />
          </form>
          {current && details}
          {(toggle && current) && moreDetails}
        </main>

        <LineChart />
      </div>
    </React.Fragment>
  );
}

export default App;
