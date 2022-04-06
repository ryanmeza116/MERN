const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

const [firstAnimal, secondAnimal, ...otherAnimals] = animals;
console.log(firstAnimal, secondAnimal, ...otherAnimals)
// => ['fish', 'cat', 'bird']

// fish, cat, bird stored in one variable. 
// example of spread => ...

const person = {
firstName: 'Bob',
lastName: 'Marley',
email: 'bob@marley.com',
password: 'sekureP@ssw0rd9',
username: 'barley',
addresses: [
    {
    address: '1600 Pennsylvania Avenue',
    city: 'Washington, D.C.',
    zipcode: '20500',
    },
    {
    address: '221B Baker St.',
    city: 'London',
    zipcode: 'WC2N 5DU',
    }
],
createdAt: 1543945177623
};

const { firstName, lastName, ...attributes } = person;
console.log(firstName)
console.log(lastName)
console.log(attributes)

const personCopy = { ...person };
console.log(personCopy)




