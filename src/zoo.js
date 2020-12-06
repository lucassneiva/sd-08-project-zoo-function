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
const data = require('./data');

function animalsByIds(...ids) {
  let retorno = [];
  console.log(ids);
  if (ids.length === 0) {
    return [];
  } else {
    ids.forEach((element, index) => {
      const filterAnimals = animals.filter(({id}) => (element === id));
      retorno[index] = [...filterAnimals];
      });
    console.log(Object.values(retorno));
    return retorno;
  }
}
animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46');

function animalsOlderThan(animal, age) {
  let retorno;
  let filterName = animals.filter(({name}) => (name === animal));
  console.log(Object.values(filterName));
  retorno = filterName.every(({residents}) => residents.age > age);
  console.log(retorno);
  return retorno;
}
//animalsOlderThan('otters', 7);

function employeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
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
