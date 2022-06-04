// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
    return drivers.filter(el => el.toLowerCase() === name.toLowerCase())
}

beforeEach(function () {
    drivers.length = 0;

    drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');
  });

function fuzzyMatch(drivers, beginName) {
    return drivers.filter(el => el.startsWith(beginName))
}

function matchName(drivers, nameMatch) {
    return drivers.filter(el => el.name === nameMatch)
}