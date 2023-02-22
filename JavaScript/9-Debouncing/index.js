// Debouncing in javascript -->> Debouncing is a programming practice used to ensure 
// that time-consuming tasks do not fire so often, that it stalls the performance of the web page. 
// In other words, it limits the rate at which a function gets invoked.
let count = 0;
const getData = () => {
  // calls an API and gets data
  console.log("Fetching Data ......", count++);
};

const debounce = function (fn, d) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, d);
  };
};

const betterFunction = debounce(getData, 300);
