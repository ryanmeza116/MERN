const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// creating email and first animal seperate variables with destructured code : 

const {email} = person ;
const [firstAnimal] = animals;
console.log(email) //bob@marley.com
console.log(firstAnimal) // horse

// To retrieve multiple inquiries: 

const {email, password} = person;
const [ firstAnimal, secondAnimal, thirdAnimal] = animals;

// if two variables are declared in one scope: 

const password = '12345';
const { password } = person;
// Error : SyntaxError: Identifier 'password' has already been declared. 
// Correct version : 

const password = '12345';
const { password: hashedPassword } = person;

// Nested Destructuring : 

const person = {
    firstName: 'ryan',
    lastName: 'meza',
    email: 'ryan@email.com',
    password: '1234',
    username: 'ryan116',
    addresses: [
        {
            address : '101 w church st',
            city : 'Absecon',
            state : 'New Jersey',
            zipcode : '08201'
        },
        {
            address : '986 Boardwalk',
            city : 'Ocean City',
            state : 'New Jersey',
            zipcode : '08226'
        }

    ],
    createdAt: 123456789
};

const { addresses: [home, beachAddress] } = person;

// to get a specific value in an object : 

const {addresses : [, {city: oceanCity }]} = person;


