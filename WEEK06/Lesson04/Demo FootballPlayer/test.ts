const employees = [
  { name: "Alice", department: "accounting" },
  { name: "Bob", department: "human resources" },
  { name: "Carl", department: "accounting" },
];
console.log(employees[1].name);
console.log(employees[1].department);

const result = employees.filter((obj) => {
  return obj.department === "accounting";
});

// 👇️ [{name: 'Alice', department: 'accounting'},
//     {name: 'Carl', department: 'accounting'}]
console.log(result);
