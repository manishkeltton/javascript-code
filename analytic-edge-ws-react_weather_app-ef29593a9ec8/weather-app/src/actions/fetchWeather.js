export function fetchWeather() {
  return function (dispatch) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=3b290be9028803139668a0e0e2877847"
    )
      .then((res) => {
        return res.json();
      })
      .then((JSONres) => {
        //dispatch the action
        dispatch({ type: "FETCH_WEATHER", payload: JSONres });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
