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

const data = require('./data');

function animalsByIds(ids) {
  // seu código aqui
}

function animalsOlderThan(animal, age) {
  const animalFound = data.animals.find(animalObject => animalObject.name === animal);
  const ageList = animalFound.residents.map(resident => resident.age);
  return ageList.every(ageIndex => ageIndex >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const employerFound = data.employees.find(employer => employer.id === id);
  return employerFound.managers.length <= 1;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newObject = [{
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  }];
  data.employees = [...data.employees, ...newObject];
  return data.employees;
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
  const employerObject = data.employees.find(employer => employer.id === id);
  const specieId = employerObject.responsibleFor[0];
  const specieObject = data.animals.find(specie => specie.id === specieId);
  const biggAge = specieObject.residents.reduce((biggerAge, animal) =>
  ((biggerAge > animal.age) ? biggerAge : animal.age));
  const animalObject = specieObject.residents.find(animal => animal.age === biggAge);
  const { name, sex, age } = animalObject;
  return [name, sex, age];
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
