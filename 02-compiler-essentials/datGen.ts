//Make a data generator that generates data randomly beofre splicing it together to create fake people
import faker

//declare variables/types
let identityArray = [];

type identity = {
  name: string;
  age: number;
  email: string;
};

let identitiesRequested = 4;

for (let index = 0; (index = identitiesRequested); index++) {
  //Generate content
  let name: string = faker.person.fullName();
  let age: number = faker.number.int(100);
  let email: string = faker.internet.email();

  let person: identity = Object.assign(name, age, email);
  console.log(person)
}

//push the person into the array
