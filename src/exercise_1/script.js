let linkform = document.getElementById("linkForm");

linkform.addEventListener("submit", (e) => {
    e.preventDefault();
    const link = document.getElementById("link");
    let list = JSON.parse(localStorage.getItem("Linkliste"));
    if(list == null) {
        list = [];
    }
    list.push(link.value);
    localStorage.setItem("Linkliste", JSON.stringify(list));
    createTable(list);
})

const createTable = (list) => {
    const divTable = document.getElementById("linklist");
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
}