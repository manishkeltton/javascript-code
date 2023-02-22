// document.querySelector("#category").addEventListener("click", (e) => {
//   console.log("Category parent clicked");
//   console.log("event e =>", e);
//   console.log("Target =>", e.target.id);
//   if (e.target.tagName == "LI") {
//     window.location.href = "/" + e.target.id;
//   }
// });

document.querySelector("#form").addEventListener("keyup", (e) => {
  console.log(e);
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});
