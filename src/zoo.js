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

const { animals, employees, hours } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  if (ids.length === 0) {
    return (ids = []);
  }

  return ids.map(eachId => animals.find(animal => animal.id === eachId));
}

function animalsOlderThan(animal, age) {
  const findAnimal = animals.find(element => element.name === animal);
  return findAnimal.residents.every(elem => elem.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return (employeeName = {});
  }

  return employees.find(
    eachName =>
      eachName.firstName === employeeName || eachName.lastName === employeeName,
  );
}


function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(eachEmployee => eachEmployee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const obj = { id, firstName, lastName, managers: [], responsibleFor: [] };
  if (!managers === undefined) {
    obj.managers.push(managers);
    obj.responsibleFor.push(responsibleFor);
  }
  employees.push(obj);
  console.log(managers);
}

function animalCount(species) {
  let animais = {};
  animals.forEach((eachOne) => {
    if (!species) {
      return (animais[eachOne.name] = eachOne.residents.length);
    }
    animais = animals.find(each => species === each.name).residents.length;
    return null;
  });
  return animais;
}

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const obj = Object.entries(entrants);

  return obj.reduce((acc, current) => {
    if (current[0] === 'Adult') {
      acc += current[1] * 49.99;
    } else if (current[0] === 'Senior') {
      acc += current[1] * 24.99;
    } else if (current[0] === 'Child') {
      acc += current[1] * 20.99;
    }
    return acc;
  }, 0);
}

function animalMap(options) {
  const obj = { NE: [], NW: [], SE: [], SW: [] };
  if (!options) {
    animals.forEach(each => obj[each.location].push(each.name));
  } else if (options.includeNames === true) {
    // obj.forEach(each => obj[each.location][each.name].push(each.residents.name));
  }
  return obj;
}

function schedule(dayName) {
  Object.entries(hours).forEach((eachOne) => {
    const days = Object.entries(hours);
    if (!dayName) {
      console.log(days);
      return days;
    }
    return null;
  });
}

// const expected = {
//   'Tuesday': 'Open from 8am until 6pm',
//   'Wednesday': 'Open from 8am until 6pm',
//   'Thursday': 'Open from 10am until 8pm',
//   'Friday': 'Open from 10am until 8pm',
//   'Saturday': 'Open from 8am until 10pm',
//   'Sunday': 'Open from 8am until 8pm',
//   'Monday': 'CLOSED'
// };

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
