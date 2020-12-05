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

const { animals, employees, prices } = require('./data');
const data = require('./data');


function animalsByIds(...ids) {
  return animals.filter(({ id }) => ids.includes(id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const idadeMinima = animals
  .find(({ name }) => (name === animal))
  .residents.every(animalAge => animalAge.age >= age);

  return idadeMinima;
}

function employeeByName(employeeName) {
  // seu código aqui
  return !employeeName ? {} : employees
  .filter(({ firstName, lastName }) =>
  employeeName.includes(firstName) || employeeName.includes(lastName))[0];
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.filter(idManager => idManager.managers[0] === id)
  .some(isTrue => isTrue.managers);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species = 'all') {
  // seu código aqui
  const countAll = Object.fromEntries(animals
  .map(({ name, residents }) => [name, residents.length]));
  species = species === 'all' ? countAll :
  animals.filter(especie => especie.name === species)[0].residents.length;
  return species;
}

function entryCalculator(entrants) {
  // seu código aqui
  return !entrants || Object.keys(entrants).length === 0 ? 0 : Object.keys(entrants)
    .reduce((acc, curr) => acc +
    (entrants[curr] * prices[curr]), 0);
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
