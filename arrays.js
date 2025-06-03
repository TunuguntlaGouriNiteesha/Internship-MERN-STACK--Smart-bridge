// Todo learn Array
// syntax of array
const trainers=['Niteesha',16,'true','student'];
console.log(trainers);
// index in array
const pokemons = ['pikachu ⚡','charmandar 🔥','squirtle 💧','bulbasaur 🍃']
console.log(pokemons[3]);
console.log(pokemons[0]);
// you dont know the total count of items in array
// you want to find the last item in your array?
console.log(pokemons.length)
console.log(pokemons[pokemons.length - 1])
// =======================================================================================================
// *array methods->function to help us and they have different properties and usage
// *add or remove elements from array last place
// add element
const names= ['john','sam','richard','annie']
names.push('david');
console.log(names)
// remove element
names.pop();
console.log(names)
// *add or remove elements from start of array
const anime=['death note','one piece','naruto','bleach','demon slayer']
// unshift is used to add elements at start
anime.unshift('FMA');
// shift is used to remove elements at start
console.log(anime)
anime.shift();
anime.shift();
console.log(anime)
console.log(anime.indexOf("demon slayer"))
// -----------------------------------------------------------------------------------------------------------------

