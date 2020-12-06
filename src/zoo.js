/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const { animals } = require('./data');
const { employees } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  const animalsArray = [];
  if (ids !== undefined) {
    ids.forEach((element) => {
      animalsArray.push(animals.find(animal => (animal.id === element)));
    });
  }
  return animalsArray;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const especie = animals.find(animalSpecies => animalSpecies.name === animal);
  const result = especie.residents.every(animalAge => animalAge.age >= age);
  return result;
}

function employeeByName(employeeName) {
  // seu código aqui
  let result = {};
  if (employeeName !== undefined) {
    result = employees
    .find(employee => employee.firstName === employeeName || employee.lastName === employeeName);
  }
  return result;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  let newEmployee = {};
  Object.assign(newEmployee, personalInfo, associatedWith);
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
