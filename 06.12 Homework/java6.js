//3
const students = [
  {
    name: "Aigul",
    age: 17,
    grade: "10 B",
  },
  {
    name: "Ruslan",
    age: 9,
    grade: "4C",
  },
  {
    name: "Zhanar",
    age: 18,
    grade: "11",
  },
  {
    name: "Marzhan",
    age: 11,
    grade: "5A",
  },
  {
    name: "Samat",
    age: 12,
    grade: "7Б",
  },
];
console.log(students);

function addStudents() {
  return students.sort((a, b) => a.age - b.age)[students.length - 1];
}
console.log(addStudents());

function maxStudent() {
  return students.filter((num) => num.age <= 14);
}
console.log(maxStudent());
