localStorage.setItem("hello", "world");
localStorage.getItem("hello");
localStorage.removeItem("hello");
localStorage.clear();

const user = {name: "Manish"};

localStorage.setItem("user", JSON.stringify(user));
JSON.parse(localStorage.getItem("user"));