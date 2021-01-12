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
  if (ids === undefined) {
    return [];
  }
  const verifyId = ids.map(elem => (data.animals.find(elem2 => elem2.id.includes(elem))));
  return verifyId;
}

function animalsOlderThan(animal, age) {
  const verifyAge = data.animals.find(elem => elem.name === animal);
  return verifyAge.residents.every(elem => elem.age > age);
}

function employeeByName(string) {
  if (string === undefined) {
    return {};
  }
  const verifyEmployee = data.employees
  .find(elem => (elem.firstName === string || elem.lastName === string));
  return verifyEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  const newEmployeeData = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return newEmployeeData;
}

function isManager(id) {
  const getEmployee = data.employees.map(elem => elem.managers);
  const verifyManagement = getEmployee.some(elem => elem.includes(id));
  return verifyManagement;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(newEmployee);
}

function animalCount(species) {
  const getAnimals = data.animals.reduce((acc, elem) => {
    return Object.assign(acc, {
      [elem.name]: elem.residents.length
    });
  }, {});
  if (species !== undefined) {
    return getAnimals[species];
  } return getAnimals;
}

function entryCalculator(entrants) {
  let sum = 0;
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  return sum;
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
