console.log("-----------------> Map Function <----------------------");

const arr = [5, 1, 3, 2, 6];

// Double - [10, 2, 6, 4, 12]

// Triple - [15, 3, 9, 6, 18]

// Binary - ["101", "1", "11", "10", "110"]

function double(x) {
  return x * 2;
}

function triple(x) {
  return x * 3;
}

function binary(x) {
  return x.toString(2);
}

const output1 = arr.map(double);
const output2 = arr.map(triple);
const output3 = arr.map(binary);

console.log("Double =>", output1);
console.log("Triple =>", output2);
console.log("Binary =>", output3);

console.log("---------------> End Map Function <------------------\n");

console.log("---------------> Filter Function <--------------------");

const arr2 = [5, 1, 3, 2, 6];

// filter odd values

const isOdd = (x) => {
  return x % 2;
};

const isEven = (x) => {
  return x % 2 == 0;
};

const greaterThan4 = (x) => {
  return x > 4;
};

const odd = arr2.filter(isOdd);
const even = arr2.filter(isEven);
const greater = arr2.filter(greaterThan4);

console.log("Odd =>", odd);
console.log("Even =>", even);
console.log("Greater than 4 =>", greater);

console.log("---------------> End Filter Function <--------------------\n");

console.log("---------------> Reducer Function <--------------------");

const arr3 = [5, 1, 3, 2, 6];

// sum or max

function findSum(arr3) {
  let sum = 0;
  for (let i = 0; i < arr3.length; i++) {
    sum = sum + arr3[i];
  }
  return sum;
}

console.log("sum", findSum(arr3));

const reducerVal = arr3.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

console.log("reducerVal =>", reducerVal);

// Max
function maxValue(arr3) {
  let max = arr3[0];
  for (let i = 1; i < arr3.length; i++) {
    if (max < arr3[i]) {
      max = arr3[i];
    }
  }
  return max;
}

console.log("MaxValue =>", maxValue(arr3));

const maxRed = arr3.reduce(function (acc, curr) {
  if (acc <= curr) {
    acc = curr;
  }
  return acc;
}, 0);

console.log("maxRed =>", maxRed);

console.log("---------------> End Reducer Function <--------------------\n");

console.log(
  "---------------> Map, Filter & reduce Function <--------------------"
);

const users = [
  { firstName: "Manish", lastName: "Kumar", age: 25 },
  { firstName: "donald", lastName: "trump", age: 68 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 25 },
];

// List of full names

const fullName = users.map((x) => x.firstName + " " + x.lastName);

console.log("fullName => ", fullName);

const filterAge = users
  .filter((x) => x.age >= 50)
  .map((x) => x.firstName + " " + x.lastName);

console.log("filterAge => ", filterAge);

const redVal = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log("redVal =>", redVal);
