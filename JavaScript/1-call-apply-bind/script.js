let name = {
  firstName: "Manish",
  lastName: "Kumar",
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

name.printFullName();

let name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

// Function borrowing

name.printFullName.call(name2);

let name3 = {
  firstName: "Atiana",
  lastName: "Sharma",
};

let printFullName = function () {
  console.log(this.firstName + " " + this.lastName);
};

printFullName.call(name3);

let name4 = {
  firstName: "Shivam",
  lastName: "Sharma",
};

printFullName.call(name4);

let printFullName2 = function (hometown, state) {
  console.log(this.firstName + " " + this.lastName + " from " + hometown + "," + state);
};

printFullName2.call(name2, "Patna", "Bihar");// in call method passed the argument indivisually
printFullName2.call(name3, "Berline", "Germany");

printFullName2.apply(name4, ["Hajipur", "Bihar"]);// in apply methiod passed the argument in array form.


//bind method

let printMyName = printFullName.bind(name2);
printMyName();
printMyName = printFullName2.bind(name3, "Berline", "Germany");
printMyName();