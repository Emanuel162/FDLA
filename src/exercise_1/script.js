let linkform = document.getElementById("linkForm");

linkform.addEventListener("submit", (e) => {
    e.preventDefault();
    const link = document.getElementById("link").value;
    let list = JSON.parse(localStorage.getItem("Linkliste"));
    if(list == null) {
        list = [];
    }
    if(link.length > 0 && !list.includes(link)) {
        list.push(link);
    }
    localStorage.setItem("Linkliste", JSON.stringify(list));
    createUnorderedList(list);
})

const createUnorderedList = (list) => {
    const div = document.getElementById("linklist");
    div.innerHTML = "";

    const ul = document.createElement("ul");
    list.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.innerText = item;
        ul.appendChild(listItem);
    })
    div.appendChild(ul);
}

/* --- unused table view---
const createTable = (list) => {
    const divTable = document.getElementById("linklist");
    divTable.innerHTML = "";

    const table = document.createElement("table");
    const tableHead = document.createElement("th");
    tableHead.innerText = "Links";

    table.appendChild(tableHead);

    list.forEach((item) => {
        const row = document.createElement("tr");

        const cell = document.createElement("td");
        cell.appendChild(document.createTextNode(item));

        row.appendChild(cell);
        table.appendChild(row);
    })
    divTable.appendChild(table);
}*/