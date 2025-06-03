// todo higher order functions
// 1.foreach      2. map
//* array of objects ->[{},{},{},{}]->apis of this form
//? [1,2,3,4,5,6]-string


const people = [
    {name:'niteesha',age:19,role:'ai&ml'},
    {name:'kumari',age:52,role:'house wife'},
    {name:'manideep',age:21,role:'cybersecurity'},
];
function showperson(X){
 console.log(X.name)
 console.log(X);
}
people.forEach(showperson);
// by arrow
people.forEach((X) => {
    console.log(X)
});
//! for each doesnt return a new array
// ? how to solve the problem
// !map returns a new array
const office = people.map((X) => {
    return X.name
});
console.log(office);
