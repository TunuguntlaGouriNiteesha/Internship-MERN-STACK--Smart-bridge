//todo)) OBJECTS -> Collection of Key-Value pairs
//* Imagine 🤔 KEY like a variable and think of VALUE as it's value
//? syntax -> const objectName = { key: value }
//* How to access Values ? Answer is DOT NOTATION -> objectName.keyName

const obj = {
  // value is string
  firstName: 'Yatharth',
  // value is string
  lastName: 'Shahrawat',
  // value is number
  age: 27,
  // value is  array
  siblings: ['Raj', 'Raman', 'Sunny'],
  // value can also be another object
  // nested objects --> object inside object
  obj2: {
    villain: 'Joker',
    hero: 'BatMan',
    hobbies: ['Go to Gotham City with Harley Quinn', 'Give trauma to BatMan'],
    skills: {
      numberOne: 'Laughter',
      numberTwo: 'Planning',
      numerThree: {
        indoor: 'Chess ♟️',
      },
    },
  },
};
//* How to access Values ? Answer is DOT NOTATION -> objectName.keyName
// Dot Notation
// here objectName is obj and keyName is firstName
console.log(obj.firstName);
console.log(obj.lastName);
console.log(obj.age);
console.log(obj.siblings);
console.log(obj.siblings[1]);
console.log(obj.siblings[2]);
console.log(obj.obj2.hero);
console.log(obj.obj2.villain);
console.log(obj.obj2.hobbies[1]);
console.log(obj.obj2.skills.numerThree.indoor);
// console.log(obj['age']); // bracket notation --> dynamic object keys

//-----------------------------------------------------------------------
const person = {
  name: 'Allah Reddy',
  city: 'Hyderabad',
  age: 21,
};

//* using DOT NOTATION we can access the values and also change them
person.name = 'Akshay';
person.city = 'Vijayawada';
person.age = 25;

// delete person.age
console.log(person);

