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

const { animals, employees, prices, hours } = require('./data');

const animalsByIds = (...rest) => animals.filter(({ id }) => rest.some(idKey => idKey === id));

const animalsOlderThan = (animal, key) =>
  animals.some(({ residents, name }) => residents.every(({ age }) => name === animal && age > key));

const employeeByName = employeeName =>
  employees.find(
    ({ firstName, lastName }) => firstName === employeeName || lastName === employeeName
  ) || {};

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

const isManager = id =>
  employees.some(({ managers, id: idKey }) => managers.length === 1 && idKey === id);

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) =>
  employees.push({ id, firstName, lastName, managers, responsibleFor });

const animalCount = species =>
  species
    ? animals.find(animal => animal.name === species).residents.length
    : animals.reduce(
        (accAnimal, currAnimal) =>
          Object.assign(accAnimal, { [currAnimal.name]: currAnimal.residents.length }),
        {}
      );

function entryCalculator(entrants = 0) {
  let countAnimals = 0;
  Object.keys(entrants).forEach(key => (countAnimals += prices[key] * entrants[key]));
  return countAnimals;
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  let week = {};
  Object.keys(hours).forEach(day => {
    const weekDay = !dayName ? day : dayName;
    if (hours[weekDay].open === 0) {
      week = { ...week, [weekDay]: `CLOSED` };
    } else
      week = {
        ...week,
        [weekDay]: `Open from ${hours[weekDay].open}am until ${hours[weekDay].close - 12}pm`,
      };
  });
  return week;
}

const oldestFromFirstSpecies = id => {
  const animalId = employees.find(({ id: idKey }) => idKey === id).responsibleFor;
  const { residents } = animals.find(({ id: idKey }) => idKey === animalId[0]);
  const { name, sex, age } = residents.reduce((accAnimal, currAnimal) =>
    accAnimal.age > currAnimal.age ? accAnimal : currAnimal
  );
  return [name, sex, age];
};

const increasePrices = percentage => {
  const discount = percentage / 100 + 1;
  prices.Adult = Math.round(prices.Adult * 100 * discount) / 100;
  prices.Child = Math.round(prices.Child * 100 * discount) / 100;
  prices.Senior = Math.round(prices.Senior * 100 * discount) / 100;
  return prices;
};

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
