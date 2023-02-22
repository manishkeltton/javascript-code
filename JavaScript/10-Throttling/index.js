// Throttling -> delay this next function call for certain limit time.

// const expensive = () => {
//   console.log("Expensive");
// };

// window.addEventListener("resize", betterExpensive);

// const betterExpensive = throttle(expensive, limit);

// const throttle = (func, limit) => {
//   let flag = true;
//   return function () {
//     if (flag) {
//       func();
//       flag = false;
//       setTimeout(() => {
//         flag = true;
//       }, limit);
//     }
//   };
// };

const expensive = (arguments) => {
  console.log("Expensive");
};

window.addEventListener("resize", betterExpensive);
const betterExpensive = throttle(expensive, limit);
const throttle = (func, limit) => {
  let flag = true;
  return function () {
    let context = this;
    args = arguments;
    if (flag) {
      // func();
      func.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};
