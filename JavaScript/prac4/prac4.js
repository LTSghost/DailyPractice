var json = `[
    {"number":1,"name":"張三","gender":"男"},
    {"number":2,"name":"李四","gender":"女"},
    {"number":3,"name":"王五","gender":"男"}
]`;
var obj = JSON.parse(json);
console.log(obj[0].name); //輸出"張三"

// async function fetchJson() {
//   let response = await fetch('./data.json');

//   console.log(response.status); // 200
//   console.log(response.statusText); // OK

//   if (response.status === 200) {
//       let data = await response.json();
//       var obj = data;
//       // handle data
//   }
// }
// fetchJson();

console.log(obj);

obj = 0;

fetch('./data.json')
    .then((response) => response.json())
    .then(
      (json) => 
      callinit(json['data'])
)


function limitNum() {
  var number = document.getElementById("number");

  re = /^[0-9]+$/;
  if ( re.test(number.value) == false ) {
    number.value = "";
    alert("請輸入數字");
  }
}

// var initTh = document.getElementsByTagName('th');

function callinit(obj) {
  for (let i = 0; i < obj.length; i++) {
    var tr = document.createElement('tr');
    tr.id = i + 1;
    table.appendChild(tr);
    // var tmpTr = document.getElementsByTagName("tr");
  
    // for (let j = 0; j < initTh.length - 1; j++) {
      var td = document.createElement('td');
      td.innerText = obj[i].number;
      tr.appendChild(td);
  
      td = document.createElement('td');
      td.innerText = obj[i].name;
      tr.appendChild(td);
  
      td = document.createElement('td');
      td.innerText = obj[i].gender;
      tr.appendChild(td);
    // }
  
    // findId = document.querySelector()
  
    var td4 = document.createElement('td');
    tr.appendChild(td4);
  
    var newP = document.createElement('p');
    newP.innerText = "刪除";
    td4.appendChild(newP);
  
    newP.addEventListener("click", function(event) {
      event.target.parentElement.parentElement.remove();
    });
  }
}

for (let i = 0; i < obj.length; i++) {
  var tr = document.createElement('tr');
  tr.id = i + 1;
  table.appendChild(tr);
  // var tmpTr = document.getElementsByTagName("tr");

  // for (let j = 0; j < initTh.length - 1; j++) {
    var td = document.createElement('td');
    td.innerText = obj[i].number;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = obj[i].name;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = obj[i].gender;
    tr.appendChild(td);
  // }

  // findId = document.querySelector()

  var td4 = document.createElement('td');
  tr.appendChild(td4);

  var newP = document.createElement('p');
  newP.innerText = "刪除";
  td4.appendChild(newP);

  newP.addEventListener("click", function(event) {
    event.target.parentElement.parentElement.remove();
  });
}


function add() {

  if ( document.getElementById("number").value == "" ) {
    alert("請輸入編號");
    return 0;
  }

  if ( document.getElementById("name").value == "" ) {
    alert("請輸入姓名");
    return 0;
  }

  if ( document.getElementById("select").value == "") {
    alert("請選擇性別");
    return 0;
  }

  var input = document.getElementsByTagName("input");
  var table = document.getElementById("table");
  var select = document.getElementById("select").value;
  var number = document.getElementById('number').value;
  var allTrTag = document.getElementsByTagName("tr");

  for ( let i = 0; i < allTrTag.length; i++ ) {
    if ( number != allTrTag[i].id ) {
      continue;
    } else {
      alert("編號以重複!")
      return 0;
    }
  }

  var tr = document.createElement('tr');
  table.appendChild(tr);

  tr.id = number;

  for (let i = 0; i < input.length; i++) {
    var td = document.createElement('td');
    td.innerHTML = input[i].value;
    tr.appendChild(td);
  }

  var td = document.createElement('td');
  if (select == 1) {
    td.innerHTML = "男";
  } else {
    td.innerHTML = "女";
  }
  tr.appendChild(td);

  var td4 = document.createElement('td');
  tr.appendChild(td4);

  var newP = document.createElement('p');
  newP.innerText = "刪除";
  td4.appendChild(newP);

  newP.addEventListener("click", function() {
    tr.remove();  
  });

  // newButton = document.createElement('td');
  // newButton.innerHTML = "刪除";
  // tr.appendChild(newButton);
  // tr.id = number;
  // newButton.addEventListener("click", function () {
  //   tr.remove(newButton);
  // });
}


// function p() {
//   newTd = document.createElement('td');
//   newTd.id = "123";
//   newTd.innerText = "cool";
  // td = document.getElementById("123");
  // td.appendChild('p');

// }
