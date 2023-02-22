const weatherInfo = (
    state = {
      weatherinfo: {},
    },
    action
  ) => {
    //check the action type
    if ((action.type = "FETCH_WEATHER")) {
      console.log("action.payload =>", action.payload);
      state = { ...state, weatherinfo: action.payload };
    }
    return state;
  };
  
  export default weatherInfo;
  