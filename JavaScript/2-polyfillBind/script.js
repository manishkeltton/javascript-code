let name = {
  firstName: "Atiana",
  lastName: "sharma",
};

// Basic method
// let printName = function () {
//   console.log(this.firstName + " " + this.lastName);
// };

// let printMyName = printName.bind(name);
// printMyName();

// create own bind method

// Function.prototype.mybind = function (...args) {
     // this -> printName
//   let obj = this;
//   return function () {
//     // printName();
//     obj.call(args[0]);
//   };
// };

// let printMyName2 = printName.mybind(name);
// printMyName2();

// passing single parameter

// let printName = function (hometown) {
//   console.log(this.firstName + " " + this.lastName + "," + hometown);
// };

// let printMyName = printName.bind(name, "Germany");
// printMyName();

// // create own bind method

// Function.prototype.mybind = function (...args) {
//   // this -> printName
//   let obj = this;
//   params = args.slice(1); //It will removed the first element from the list and the return a element
//   return function () {
//     // printName();
//     //   obj.call(args[0], params);
//     obj.apply(args[0], params); // params may be made array type.
//   };
// };

// let printMyName2 = printName.mybind(name, "Germany");
// printMyName2();

let printName = function (hometown, state, countary) {
  console.log(
    this.firstName + " " + this.lastName + "," + hometown + " , " + state + " , " + countary
  );
};

let printMyName = printName.bind(name, "Patna");
printMyName("Germany", "India");

// create own bind method

Function.prototype.mybind = function (...args) {
  // this -> printName
  let obj = this;
  params = args.slice(1); //It will removed the first element from the list and the return a element
  return function (...args2) {
    // printName();
    //   obj.call(args[0], params);
    obj.apply(args[0], [...params, ...args2]); // params may be made array type.
  };
};

let printMyName2 = printName.mybind(name, "Patna");
printMyName2("Germany", "India");
