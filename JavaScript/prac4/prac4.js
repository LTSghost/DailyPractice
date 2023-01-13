var json = `[
    {"number":1,"name":"張三","gender":"男"},
    {"number":2,"name":"李四","gender":"女"},
    {"number":3,"name":"王五","gender":"男"}
]`;
var obj = JSON.parse(json); 
console.log(obj[0]); //输出“张三” 

var initTh = document.getElementsByTagName('th');

for ( let i = 0 ; i < obj.length; i++) {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    for ( let j = 0; j < initTh.length; j++) {
        var td = document.createElement('td');
        td.innerHTML = obj[i].number;
        tr.appendChild(td);
    }

}

function add() {
    var input = document.getElementsByTagName("input");
    var table = document.getElementById("table");
    var select = document.getElementById("select").value;



    var tr = document.createElement('tr');
    table.appendChild(tr);

    
    for ( let i = 0; i < input.length; i++) {
        var td = document.createElement('td');
        td.innerHTML = input[i].value;
        tr.appendChild(td);
    }

    var td = document.createElement('td');
    if ( select == 1 ) {
        td.innerHTML = "男";
    } else {
        td.innerHTML = "女";
    }
    tr.appendChild(td);
}
