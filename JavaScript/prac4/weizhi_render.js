function render() {
  const listElement = document.getElementById("list");
  listElement.innerHTML = "";
  for (const key in data)
      if (Object.hasOwnProperty.call(data, key)) {
          const trElement = document.createElement("tr");
          const idElement = document.createElement("td");
          idElement.innerText = key;
          trElement.appendChild(idElement);
          data[key].forEach(element => {
              const tdElement = document.createElement("td");
              tdElement.innerText = element;
              trElement.appendChild(tdElement);
          });
          const tdElement = document.createElement("td");
          const btnElement = document.createElement("button");
          btnElement.innerText = "刪除";
          btnElement.addEventListener("click", remove);
          tdElement.appendChild(btnElement);
          trElement.appendChild(tdElement);
          listElement.appendChild(trElement);
      }
}