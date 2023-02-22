// First run capturing in Html DOM manipulation then run event bubbling

// #Event Bubbling Example -> going for up in Html Dom tree
// Printing sequence :- Child Click! -> Parent Click! -> Grandparent Click!

// document.querySelector("#grandparent").addEventListener("click", () => {
//   console.log("Grandparent Click!");
// });

// document.querySelector("#parent").addEventListener("click", () => {
//   console.log("Parent Click!");
// });

// document.querySelector("#child").addEventListener("click", () => {
//   console.log("Child Click!");
// });

// document.querySelector("#grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("Grandparent Click!");
//   },
//   false
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent Click!");
//   },
//   false
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("Child Click!");
//   },
//   false
// );

// #Event Trickling Example -> goin for down in html Dom tree
// Printing sequence :- Grandparent Click! -> Parent Click! -> Child Click!

// document.querySelector("#grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("Grandparent Click!");
//   },
//   true
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent Click!");
//   },
//   true
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("Child Click!");
//   },
//   true
// );

// document.querySelector("#grandparent").addEventListener(
//     "click",
//     () => {
//       console.log("Grandparent Click!");
//     },
//     true
//   );//captuiring

//   document.querySelector("#parent").addEventListener(
//     "click",
//     () => {
//       console.log("Parent Click!");
//     },
//     false
//   );//bubbling

//   document.querySelector("#child").addEventListener(
//     "click",
//     () => {
//       console.log("Child Click!");
//     },
//     true
//   );//capturing

// document.querySelector("#grandparent").addEventListener(
//     "click",
//     () => {
//       console.log("Grandparent Click!");
//     },
//     true
//   );//captuiring

//   document.querySelector("#parent").addEventListener(
//     "click",
//     () => {
//       console.log("Parent Click!");
//     },
//     false
//   );//bubbling

//   document.querySelector("#child").addEventListener(
//     "click",
//     () => {
//       console.log("Child Click!");
//     },
//     false
//   );//bubbling

// document.querySelector("#grandparent").addEventListener(
//     "click",
//     () => {
//       console.log("Grandparent Click!");
//     },
//     false
//   );

//   document.querySelector("#parent").addEventListener(
//     "click",
//     (e) => {
//       console.log("Parent Click!");
//       e.stopPropagation();
//     },
//     false
//   );

//   document.querySelector("#child").addEventListener(
//     "click",
//     () => {
//       console.log("Child Click!");
//     },
//     false
//   );

document.querySelector("#grandparent").addEventListener(
  "click",
  (e) => {
    console.log("Grandparent Click!");
    e.stopPropagation();
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent Click!");
    //   e.stopPropagation();
  },
  true
);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("Child Click!");
    e.stopPropagation();
  },
  true
);
