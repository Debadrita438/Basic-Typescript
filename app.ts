// Complex types - arrays, objects
// const person: object = {
//     name: 'Debadrita',
//     age: 22
// };

// console.log(person.name); // Shows error because we haven't given any proper definition, we only said it is an object

// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Debadrita',
//     age: 22
// };

// Better syntax
const person = {
    name: 'Debadrita',
    age: 22,
    hobbies: [ 'Painting', 'Gaming' ]
};

let favouriteActivites: string[];
favouriteActivites = [ 'Sports' ];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
