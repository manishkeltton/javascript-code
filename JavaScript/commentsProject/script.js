console.dir(document);

var input = document.querySelector(".comment");
console.log("input =>", input.value);
var cmtBtn = document.querySelector(".comment-button");

cmtBtn.addEventListener("click", (e) => {
  console.log("commented");
  if (input.value != "") {
    console.log("Value", input.value );
    comment();
  }
  e.preventDefault();
});

function comment(){
    console.log("comment Function");
    var commentList = document.querySelector(".comment-list");
    var div = document.createElement("div");
    commentList.prepend(div);
    div.style.margin ="6%";
    var span1 = document.createElement('span');
    span1.setAttribute("class", "commentValue");
    span1.innerHTML = input.value;
    span1.style.margin = "10px";
    span1.style.border = "1px solid black"
    span1.style.padding = "5px 10px"
    var span2 = document.createElement('span');
    span2.textContent = "Like";
    span2.style.margin = "10px";
    span2.style.padding = "5px 10px"
    var span3 = document.createElement('span');
    span3.textContent = "reply";
    span3.style.margin = "10px";
    span3.style.padding = "5px 10px"
    span3.style.borderBottom = "1px solid black"
    span3.style.cursor = "pointer";
    var span4 = document.createElement('span');
    span4.textContent = "del";
    span4.style.margin = "10px";
    span4.style.padding = "5px 10px"
    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(span3);
    div.appendChild(span4);
    input.value = "";

    span3.addEventListener("click", reply);
     
}

function reply() {
    console.log("reply function");
    var commentValue = document.querySelector(".nested-list");
    console.log("commentValue =>", commentValue);
    var span1 = document.createElement('span');
    span1.innerHTML = "hello";
    commentValue.appendChild(span1);
}
