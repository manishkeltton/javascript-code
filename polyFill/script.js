// implement polyfill for split

const str = "this is some string";
String.prototype.customSplit = (sep = "") => {
  const res = [];
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    if (el === sep || (sep === "" && temp)) {
      res.push(temp);
      temp = "";
    }
    if (el !== sep) {
      temp += el;
    }
  }
  if (temp) {
    res.push(temp);
    temp = "";
  }
  return res;
};
console.log(str.customSplit(" "));
