import { combineReducers } from "redux";
import { weatherInfo } from "./weaherReducer";

// combine reducers
const reducers = combineReducers({
  WeatherInfo: weatherInfo,
});

export default reducers;