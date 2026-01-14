import { useState } from "react";
import employees from "../data/employeesData";

const EmployeeTable = () => {
  const [data, setData] = useState(employees);
  const [sortKey, setSortKey] = useState(null);
  const [direction, setDirection] = useState("asc");

  const handleSort = (key) => {
    const newDirection =
      sortKey === key && direction === "asc" ? "desc" : "asc";

    setSortKey(key);
    setDirection(newDirection);

    const sorted = [...data].sort((a, b) => {
      if (key === "joinDate") {
        return newDirection === "asc"
          ? new Date(a[key]) - new Date(b[key])
          : new Date(b[key]) - new Date(a[key]);
      }

      return newDirection === "asc"
        ? a[key] > b[key] ? 1 : -1
        : a[key] < b[key] ? 1 : -1;
    });

    setData(sorted);
  };

  const arrow = (key) =>
    sortKey === key ? (direction === "asc" ? " ↑" : " ↓") : "";

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th onClick={() => handleSort("name")}>Name{arrow("name")}</th>
          <th onClick={() => handleSort("department")}>Department{arrow("department")}</th>
          <th onClick={() => handleSort("salary")}>Salary{arrow("salary")}</th>
          <th onClick={() => handleSort("joinDate")}>Join Date{arrow("joinDate")}</th>
        </tr>
      </thead>
      <tbody>
        {data.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.name}</td>
            <td>{emp.department}</td>
            <td>{emp.salary}</td>
            <td>{emp.joinDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;