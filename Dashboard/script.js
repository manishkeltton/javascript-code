console.log("Dashboard");

fetch("./MOCK_DATA.json")
    .then(data => { return data.json() })
    .then(res => {
        console.log("Success =>", res)
        // searchData(res);
        showTable(res);
    })
    .catch(error => console.log("Error =>", error))

let body = document.querySelector("body");

let table = document.createElement("table");
table.setAttribute("id", "myTable")
let tr = document.createElement("tr");
let tr2;

let th1 = document.createElement("th");
th1.innerText = "#";

let th2 = document.createElement("th");
th2.innerText = "Projects";

let th3 = document.createElement("th");
th3.innerText = "Start Date";

let th4 = document.createElement("th");
th4.innerText = "Status";

let th5 = document.createElement("th");
th5.innerText = "Team";

let th6 = document.createElement("th");
th6.innerText = "Progress";

let th7 = document.createElement("th");
th7.innerText = "Action";
let td, img;
table.appendChild(tr);
tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);
tr.appendChild(th4);
tr.appendChild(th5);
tr.appendChild(th6);
tr.appendChild(th7);
body.appendChild(table);

function fetchData(res, isRender) {

    if (isRender) {
        let trValue = document.querySelectorAll("tr");
        for (let i = 1; i < trValue.length; i++) {
            trValue[i].innerHTML = "";
        }
    }
    res.map(data => {
        tr2 = document.createElement("tr");
        td1 = document.createElement("td");
        td1.innerText = `${data.id}`;
        td2 = document.createElement("td");
        td2.innerText = `${data.projectName}`;
        td3 = document.createElement("td");
        td3.innerText = `${data.startDate}`;
        td4 = document.createElement("td");
        td4.innerText = `${data.status}`;
        td5 = document.createElement("td");
        img = document.createElement("img");
        img.setAttribute("src", `${data.avatarUrl}`);
        img.setAttribute("width", "20px");
        img.setAttribute("height", "20px");
        td5.appendChild(img);
        td6 = document.createElement("td");
        td6.innerText = `${data.progress}`;
        td7 = document.createElement("td");
        span = document.createElement("span");
        span.innerHTML = '<i class="fas fa-user-edit"></i>  <i class="fas fa-user-times"></i>';
        td7.appendChild(span);
        tr2.appendChild(td1);
        tr2.appendChild(td2);
        tr2.appendChild(td3);
        tr2.appendChild(td4);
        tr2.appendChild(td5);
        tr2.appendChild(td6);
        tr2.appendChild(td7);
        table.appendChild(tr2);
    });
}


let showTable = data => {
    fetchData(data.filter(value => {
        if (value.id <= 7) {
            return true;
        }
    }), false);
    let btnNum = data.length / 7;
    let btn, div;
    div = document.createElement("div");
    btn = document.createElement("input");
    btn.setAttribute("type", "button");
    btn.setAttribute("value", 'prev');
    btn.setAttribute("class", "prev");
    btn.style.cursor = "pointer";
    btn.style.width = "30px";
    div.appendChild(btn);
    for (let i = 1; i <= btnNum; i++) {
        btn = document.createElement("input");
        btn.setAttribute("type", "button");
        btn.setAttribute("value", `${i}`);
        btn.setAttribute("class", "btnValue");
        btn.style.cursor = "pointer";
        btn.style.width = "30px";
        div.appendChild(btn);
    }
    btn = document.createElement("input");
    btn.setAttribute("type", "button");
    btn.setAttribute("value", "next");
    btn.setAttribute("class", "next");
    btn.style.cursor = "pointer";
    btn.style.width = "30px";
    div.appendChild(btn);
    body.appendChild(div);
    body.style.display = "flex";
    body.style.flexDirection = "column";
    body.style.justifyContent = "center";
    body.style.alignItems = "center";
    let init = 0;
    let inputValue = document.querySelectorAll(".btnValue");
    for (let i = 0; i < inputValue.length; i++) {
        inputValue[i].addEventListener("click", function (e) {
            init = parseInt(e.target.value);
            init = init * 7;
            displayData(init);
        })
    }

    let prev = document.querySelector(".prev");
    prev.addEventListener("click", function (e) {
        if (init > 0) {
            init = init - 7;
            displayData(init);
        }
    })
    let next = document.querySelector(".next");
    next.addEventListener("click", function (e) {
        if (init >= 0) {
            init = init + 7;
            displayData(init);
        }
    })

    var displayData = init => {
        let end = init + 7;
        let filterData = data.filter(value => {
            if (value.id >= init && value.id <= end) {
                return true;
            }
        })
        fetchData(filterData, true);
    }

}

// function searchData(res) {
//     var input;
//     input = document.querySelector('input[type="search"]');
//     input.addEventListener("keyup", function (e) {
//         // Declare variables
//         var filter, table, tr, td, i, txtValue;

//         filter = input.value.toUpperCase();
//         table = document.getElementById("myTable");
//         tr = table.getElementsByTagName("tr");

//         // Loop through all table rows, and hide those who don't match the search query
//         for (i = 0; i < res.length; i++) {
//             // td = tr[i].getElementsByTagName("td")[0];
//             td = res[i].projectName;
//             if (td) {
//                 txtValue = td;
//                 if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                     console.log(textValue);
//                 } else {
//                     tr[i].style.display = "none";
//                 }
//             }
//         }

//     })
// } 