const persons = [
    {name: "Nigar", surname: "Glm", age: 19},
    {name: "Zülü", surname: "Qurbaova", age: 19},
    {name: "Asiman", surname: "Qasimzade", age: 19},
    {name: "Şamama", surname: "Quliyeva", age: 19}
];

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

table.classList.add("border");

const headerRow = document.createElement("tr");
["Name", "Surname", "Age"].forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
});
thead.appendChild(headerRow);


persons.forEach(person => {
    const row = document.createElement("tr");
    Object.values(person).forEach(text => {
        const td = document.createElement("td");
        td.textContent = text;
        row.appendChild(td);
    });
    tbody.appendChild(row);
});

table.appendChild(thead);
table.appendChild(tbody);

document.body.appendChild(table);