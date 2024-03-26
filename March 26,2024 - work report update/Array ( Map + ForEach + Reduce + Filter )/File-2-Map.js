const students = [
  { name: "Bob", age: 17, course: "BTech" },
  { name: "Susy", age: 18 },
  { name: "Ted", age: 18 },
  { name: "Sarah", age: 20 },
  { name: "Bill", age: 19 },
];

let studentAge = students.map((student, index, students) => {
  return student.age;
});

console.log(studentAge);
