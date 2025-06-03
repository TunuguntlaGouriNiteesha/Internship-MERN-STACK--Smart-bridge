// todo ES6(2015) features
// ecma script->help for development of js
// a.letand const     b.===operator    c.destructions   d.spread and rest operators
// b.strictly equal operators(===)-js will check that both value and datatype are checked
const num1 = 16
const num2 = 16
console.log(typeof num1)
console.log(typeof num2)
// ====  checks both values and datatypes
if (num1 === num2){
    console.log('answer is correct ✅')
}else{
    console.log('answer is not correct ❌')
}
// --------------------------------------------------------------------------------------------------
// c.desturcturing-unpacking or accessing values in a easy manner
// ?destructuring in array
const fruit =['mango','bannana','watermelon','orange']
// normal way of accessing elements in array
console.log(fruit[3])
// syntax const [] =arrayname
const [X,Y,Z,N]=fruit;
console.log(X,Y,Z,N)
// -----------------------------------------------------------------------------------------------------
// ?destructuring in objects
const person = {
    name:'niteesha',
    role:'ai&ml',
    city:'koduru',
    skills: {
        one:'chess'
    },
};
// d. spread and operator 
// syntax=>const {} = object name
const {name,role,city,skills:{one}} =person;
console.log(person.name,role,city,one)
//need to use dot notation
console.log(person.name.toUpperCase())
// *syntax-[...name]
//* split iteratable item into single items
// item on which you can run a loop
let crayons = ['orange','blue','green'];
// adding new crayons in the box
let allcrayons = [crayons,'red','black'];
console.log(allcrayons)
const youtube = 'mr.beast'
// make sure that item is spread is iterable like array
const letters = [...youtube];
// spread operator will only spread in an array
console.log(letters)
const girls = ['niteesha','pravallika','yamini'];
const sis =['bhumika','lahya']
const friends = 'nature';
const combine =[friends,...girls,...sis];
console.log(combine)
// --------------------------------------------------------------------------------------------------------------
// *rest operator
// syntax- by destructuring...
// it gather item in a single iterable
const fruits = ['apple','mango','litchi','banana','orange']
// destructuring
const[first,second,...remainingfruits]=fruits
console.log(first,second,...remainingfruits)
// --------------------------------------------------------------------------------------------------------------
