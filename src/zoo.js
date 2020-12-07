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

const { animals, employees } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  if (!ids) {
    return undefined;
  }
  const found = ids
  .map(id => animals.find(element => element.id === id));
  return found;
  // seu código aqui
}
console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

function animalsOlderThan(animal, age) {
  const found = animals
  .find(element => element.name === animal)
  .residents.every(element => element.age > age);
  return found;
}

console.log(animalsOlderThan('otters', 7));
console.log(animalsOlderThan('penguins', 10));

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const found = employees
  .find(element => element.firstName === employeeName || element.lastName === employeeName);
  return found;
  // seu código aqui
}
console.log(employeeByName());
console.log(employeeByName('Nigel'));

function createEmployee(personalInfo, associatedWith) {

  // seu código aqui
}

function isManager(id) {
  const trueOrFalse = employees
  .some(element => element.managers.includes(id));
  return trueOrFalse;
  // seu código aqui
}
console.log(isManager('b0dc644a-5335-489b-8a2c-4e086c7819a2'));
console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function animalCount(species) {
  if (!species) {
    const objeto = {};
    objeto.lions = animals[0].residents.length;
    objeto.tigers = animals[1].residents.length;
    objeto.bears = animals[2].residents.length;
    objeto.penguins = animals[3].residents.length;
    objeto.otters = animals[4].residents.length;
    objeto.frogs = animals[5].residents.length;
    objeto.snakes = animals[6].residents.length;
    objeto.elephants = animals[7].residents.length;
    objeto.giraffes = animals[8].residents.length;
    return objeto;
  }
  const number = animals.find(element => element.name === species);
  return number.residents.length;
}

console.log(animalCount('giraffes'));
console.log(animalCount());
function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const objeto = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName) {
    return objeto;
  }
  return objeto[dayName];

  // seu código aqui
}
console.log(schedule());
console.log(schedule('Tuesday'));

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
