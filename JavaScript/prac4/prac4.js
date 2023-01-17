// use fetch get local data.json file
fetch('./data.json')
    .then((response) => response.json())
    .then(
      (json) => 
      callinit(json['data'])
)

// constraint input number must digit
function limitNum() {
  var number = document.getElementById("number");

  re = /^[0-9]+$/;
  if ( re.test(number.value) == false ) {
    number.value = "";
    alert("請輸入數字");
  }
}


// initial data.json to table
function callinit(obj) {
  for (let i = 0; i < obj.length; i++) {
    var tr = document.createElement('tr');
    tr.id = i + 1;
    table.appendChild(tr);

    var td = document.createElement('td');
    td.innerText = obj[i].number;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = obj[i].name;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = obj[i].gender;
    tr.appendChild(td);
  
    var td4 = document.createElement('td');
    tr.appendChild(td4);
    addDelete(td4);
  }
}

// click button to add input info in table
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
  var select = document.getElementById("select").value;
  var number = document.getElementById('number').value;
  var allTrTag = document.getElementsByTagName("tr");


  // judge number duplicate or not
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

  // input number and name to table
  for (let i = 0; i < input.length; i++) {
    var td = document.createElement('td');
    td.innerHTML = input[i].value;
    tr.appendChild(td);
  }

  // select gender to table
  var td = document.createElement('td');
  if (select == 1) {
    td.innerHTML = "男";
  } else {
    td.innerHTML = "女";
  }
  tr.appendChild(td);

  // new delete to table
  var td4 = document.createElement('td');
  tr.appendChild(td4);
  addDelete(td4);
}

/**
 * new delete to table
 * @param td which td you wanted add delete.
 */
function addDelete(td) {
  const newP = document.createElement('p');
  newP.innerText = "刪除";
  td.appendChild(newP);

  newP.addEventListener("click", function(event) {
    event.target.parentElement.parentElement.remove();
  });
}


