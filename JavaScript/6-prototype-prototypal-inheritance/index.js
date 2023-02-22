// let arr = ["Manish", "Atiana"];
let object = {
  name: "Manish",
  city: "Patna",
  getIntro: function () {
    console.log(this.name + "from" + this.city);
  },
};

// prototype -> It is just a object

function fun() {
  //
}

let object2 = {
  name: "Atiana",
  city: "Berline",
};

// object2.__proto__ = object;

Function.prototype.mybind = function () {
  console.log("Atiaana Sharma");
};

function fun() {}

function fun2() {}
