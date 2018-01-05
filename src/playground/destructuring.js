// const person = {
//     name: 'Sagar',
//     age: 32,
//     location: {
//         city: 'Newark',
//         temp: 60
//     }
// };

// const { name: firstname = 'Anonymous', age } = person;
// console.log(`${firstname} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if(city && temperature){
// console.log(`its ${temperature} in ${city} CA.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(`Publisher name: ${publisherName}`);


const address = ['1299 S Juniper St', 'San Jose', 'California', '12345'];
const [street, city, state, zip] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [id, , m] = item;
console.log(`A medium ${id} consts ${m}`);