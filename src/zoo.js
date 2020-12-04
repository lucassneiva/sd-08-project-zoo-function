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

//1
function animalsByIds(...ids) {
  return ids ? ids.map((id) => data.animals.find((animal) => id === animal.id)) : [];
}

//2
function animalsOlderThan(animal, age) {
  return data.animals
    .find((anim) => anim.name === animal)
    .residents.every((resident) => resident.age >= age);
}

//3
function employeeByName(employeeName) {
  return employeeName ? data.employees
    .find(
      (employee) => employee.firstName === employeeName || employee.lastName === employeeName) : {};
}

//4
function createEmployee(personalInfo, associatedWith) {
  return {...personalInfo, ...associatedWith};
}

//5
function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

//6
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

//7
function animalCount(species) {
  return species ? 
    data.animals.find((animal) => species === animal.name).residents.length :
    data.animals.reduce(
      (acc, curr) => {
        acc[curr.name] = curr.residents.length;
        return acc;
      }, {});
}

//8
function entryCalculator(entrants) {
  return entrants ?
    Object.keys(entrants).reduce(
      (acc, curr) => acc + (data.prices[curr] * entrants[curr]), 0) :
    0;
}

//9
function animalMap(options) {
  // seu código aqui
}

//10
function schedule(dayName) {
  const timeArray = Object.keys(data.hours).map((day) => {
    const obj = {};
    let { open, close } = data.hours[day];

    open = open > 12 ? `${open - 12}pm` : `${open}am`;
    close = close > 12 ? `${close - 12}pm` : `${close}am`;

    obj[day] = (open === close) ? 'CLOSED' : `Open from ${open} until ${close}`;

    return obj;
  });

  return dayName ?
    timeArray.find((day) => day[dayName]) :
    timeArray.reduce((acc, curr) => {
      return {...acc, ...curr}
    }, {});
}

//11
function oldestFromFirstSpecies(id) {
  const speciesId = data.employees.find((employee) => employee.id === id).responsibleFor[0];

  const animalsFromSpecies = data.animals.find((animal) => animal.id === speciesId);

  const { name, sex, age } = animalsFromSpecies.residents.reduce(
    (acc, curr) => (acc.age > curr.age) ? acc : curr
  );

  return [name, sex, age];
}

//12
function increasePrices(percentage) {
  const { Adult, Child, Senior } = data.prices;

  data.prices = {
    'Adult': (Math.ceil(((1 + (percentage/100)) * Adult)*100))/100,
    'Child': (Math.ceil(((1 + (percentage/100)) * Child)*100))/100,
    'Senior': (Math.ceil(((1 + (percentage/100)) * Senior)*100))/100,
  }
}

//13
function findEmployee(idOrName) {
  return data.employees.find(
    (employee) => employee.id === idOrName || employee.firstName === idOrName || employee.lastName === idOrName
  );
}

function getEmployeeAnimals(employee) {
  const animalArray = animalsByIds(...employee.responsibleFor);

  return animalArray.map((animal) => animal.name);
}

function createSingleEmployee(employee) {
  const employeeAnimals = getEmployeeAnimals(employee);
  const name = `${employee.firstName} ${employee.lastName}`;
  const result = {};
  result[name] = employeeAnimals;

  return result;
}

function getAllEmployeesAnimals() {
  const result = data.employees.reduce((acc, curr) => {
    const employee = createSingleEmployee(curr);

    return {...acc, ...employee};
  }, {})

  return result;
}

function employeeCoverage(idOrName) {
  const employee = findEmployee(idOrName);
  return employee ?
    createSingleEmployee(employee) :
    getAllEmployeesAnimals();
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
