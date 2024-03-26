const students = [
  { name: "Bob", age: 17, course: "BTech" },
  { name: "Susy", age: 18 },
  { name: "Ted", age: 18 },
  { name: "Sarah", age: 20 },
  { name: "Bill", age: 19 },
];

let studentAge = students.filter((student, index, students) => {
  // Filter - which student age greater Than and Equal to 20
  let result = student.age >= 20;
  return result;
});

console.log(studentAge);
