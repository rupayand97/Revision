const tableData = [
  { name: "John", age: 25, salary: 50000 },
  { name: "Alice", age: 30, salary: 75000 },
  { name: "Bob", age: 22, salary: 45000 },
  { name: "Charlie", age: 35, salary: 90000 },
];

let sortKey = null;
let sortOrder = "asc";

const tbody = document.getElementById("tableBody");
const headers = document.querySelectorAll("th");

const renderTable = (data) => {
  tbody.innerHTML = "";
  data.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.name}</td>
      <td>${row.age}</td>
      <td>${row.salary}</td>
    `;
    tbody.appendChild(tr);
  });
};

const updateHeaders = () => {
  headers.forEach((th) => {
    const key = th.dataset.key;
    if (key === sortKey) {
      th.textContent = `${key.toUpperCase()} ${
        sortOrder === "asc" ? "↑" : "↓"
      }`;
    } else {
      th.textContent = key.toUpperCase();
    }
  });
};

headers.forEach((th) => {
  th.addEventListener("click", () => {
    const key = th.dataset.key;

    if (sortKey === key) {
      sortOrder = sortOrder === "asc" ? "desc" : "asc";
    } else {
      sortKey = key;
      sortOrder = "asc";
    }

    const sortedData = [...tableData].sort((a, b) => {
      if (typeof a[key] === "string") {
        return sortOrder === "asc"
          ? a[key].localeCompare(b[key])
          : b[key].localeCompare(a[key]);
      }
      return sortOrder === "asc" ? a[key] - b[key] : b[key] - a[key];
    });

    updateHeaders();
    renderTable(sortedData);
  });
});

renderTable(tableData);