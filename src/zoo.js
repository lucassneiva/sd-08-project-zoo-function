const { animals } = require('./data');
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
  return animals.filter(animal => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  const especieRequerida = animals.find(animal1 => animal1.name === animal);
  const residents = especieRequerida.residents;
  const olderAnimals = residents.filter(currAnimal => currAnimal.age > age);
  return olderAnimals.length === residents.length;
}

function employeeByName(employeeName) {
  // seu código aqui
  const achaempregados = data.employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);

  return employeeName ? achaempregados : {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return ({ ...personalInfo, ...associatedWith });
}

function isManager(id) {
  // seu código aqui
  return data.employees.filter(employee =>
    employee.managers.includes(id)).length > 0;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui

}

function animalCount(species) {
  // seu código aqui
  if (species === undefined) {
    return data.animals.filter(animal1 => `${animal1.name} : ${animal1.residents.length}`);
  }
  const filtroanimal = data.animals.find(animal => animal.name === species);
  return filtroanimal.residents.length;
}

function entryCalculator(entrants) {
  return entrants
    ? Object.keys(entrants).reduce(
      (acc, current) =>
        acc + (data.prices[current] * entrants[current]),
      0,
    )
    : 0;
}

function animalMap(options) {
  /* 
    const animalsporregiao = data.animals.filter(element => element.location === element.name)
    console.log(animalsporregiao)
  
   */

  /* const residenname = data.animals.residents.reduce((acc, current) => [acc.name + current.name])
  console.log(residenname)
  const animals = data.animals.map(element => `{${animals.name}:${residenname}}`)
 */

}

function schedule(dayName) {
  // seu código aqui
  const { hours } = data
  const crono = Object.entries(hours)
  const dayMsg = (dayOfWeek) => {
    if (dayOfWeek === 'Monday') return 'CLOSED';
    return `Open from ${hours[dayOfWeek].open}am until ${hours[dayOfWeek].close - 12}pm`;
  };
  const cronograma = () => {
    const mensagem = crono.reduce((acc, [keyDay, value]) => {
      acc[keyDay] = dayMsg(keyDay);
      return acc;
    }, {});


  }

  function oldestFromFirstSpecies(id) {
    // seu código aqui
    const func1 = data.employees.find(func => func.id === id);
    const primeiradalista = func1.responsibleFor[0];
    const allFromFirst = animals.find(animal =>
      primeiradalista.includes(animal.id)).residents;
    const oldestAnimalObj = allFromFirst.sort((a, b) =>
      b.age - a.age)[0];
    const { name, sex, age } = oldestAnimalObj;
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
