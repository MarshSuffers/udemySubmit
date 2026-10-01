//Make a data generator that generates data randomly beofre splicing it together to create fake people
import { faker } from "@faker-js/faker";
import { // Default prior to v9
generateMersenne53Randomizer, // Default since v9
 } from "@faker-js/faker";
//declare variables/types
const identityArray = [];
let identitiesRequested = 4;
const randomizer = generateMersenne53Randomizer();
//Generate names as strings
for (let index = 0; (index = identitiesRequested); index++) {
    //Generate content
    let name = faker.person.fullName();
    let age = faker.number.bigInt(100n);
    let email = faker.internet.email();
}
//Generate ages
//Generate emails
//add one name, age, and email together to form a person
//push the person into the array
