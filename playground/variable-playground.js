var person = {
  name: 'Chris',
  age:'30'
};

function updatePerson (obj) {
  // obj = {
  //   name: 'Chris',
  //   age: '24'
  // };

  obj.age = 24;
}

updatePerson(person);
console.log(person);

var grades = [15,88];

function addGrades (gradesArr) {
  gradesArr.push(55);
  debugger;

  // gradesArr = [12,33,99];
}

addGrades(grades);
console.log(grades);
