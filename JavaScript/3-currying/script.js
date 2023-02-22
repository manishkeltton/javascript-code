// first method for making currying using bind method
let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 2);
multiplyByThree(10);

// Second method for making currying using closure method
let multiply2 = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplybyTwo2 = multiply2(5);
multiplybyTwo2(6);

let multiplyByThree2 = multiply2(4);
multiplyByThree2(10);
