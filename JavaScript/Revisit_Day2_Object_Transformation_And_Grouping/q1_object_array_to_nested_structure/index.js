const employees = [
  { id: 1, name: "John", dept: "Engineering", salary: 80000 },
  { id: 2, name: "Jane", dept: "Engineering", salary: 95000 },
  { id: 3, name: "Bob", dept: "Marketing", salary: 65000 },
  { id: 4, name: "Alice", dept: "Engineering", salary: 88000 },
  { id: 5, name: "Charlie", dept: "Marketing", salary: 72000 },
  { id: 6, name: "Diana", dept: "HR", salary: 70000 },
];

const result = employees.reduce((acc, { name, dept, salary }) => {
  if(!acc[dept]) {
    acc[dept] = {
      employees: [],
      totalSalary: 0,
      totalCount: 0,
    };
  }

  acc[dept].employees.push(name);
  acc[dept].totalSalary += salary;
  acc[dept].totalCount++;

  return acc;
}, {});

for (const dept in result) {
  const data = result[dept];
  data.avgSalary = Number((data.totalSalary / data.totalCount).toFixed(2));
  delete data.totalSalary;
}

console.log(result);