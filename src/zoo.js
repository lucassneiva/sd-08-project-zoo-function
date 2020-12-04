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

function animalsByIds(...ids) {
  return ids.map(id => data.animals.find(animals => animals.id === id));
}

function animalsOlderThan(animal, yearsOld) {
  const pickAnimal = data.animals.find(({ name }) => name === animal);
  return pickAnimal.residents.every(({ age }) => age >= yearsOld);
}

function employeeByName(employeeName) {
  if (typeof employeeName === 'undefined') return {};
  return data.employees.find(({ firstName, lastName }) => {
    const verification = firstName === employeeName || lastName === employeeName;
    return verification;
  });
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(employeeId) {
  return data.employees.some(({ managers }) => managers.some(id => id === employeeId));
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
