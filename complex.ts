// Complex types - arrays, objects, tuples
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

// role: [number, string] ---> tuple
// const person: { name: string; age: number; hobbies: string[]; role: [number, string] } = {
//     name: 'Debadrita',
//     age: 22,
//     hobbies: [ 'Painting', 'Gaming' ],
//     role: [ 2, 'author' ]
// };

// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'] //error!!!

// let favouriteActivites: string[];
// favouriteActivites = [ 'Sports' ];

// console.log(person.name);

// for (const hobby of person.hobbies) {
//     console.log(hobby);
// }

// Enum

enum Role {
    ADMIN = 5,
    READ_ONLY,
    AUTHOR
}

const person = {
    name: 'Debadrita',
    age: 22,
    hobbies: [ 'Painting', 'Gaming' ],
    role: Role.AUTHOR
};

if (person.role === Role.AUTHOR) {
    console.log('is author');
}

// Any ---> going back to javascript, typescript functionalities are lost
