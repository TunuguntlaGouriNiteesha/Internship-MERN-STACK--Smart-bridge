// todo learn callback 📞functions
// *cb functions->function passed as arguments inside other functions
// we have heard numbers,string,boolean and even objects can be passed as parameters
function morning(){
    console.log('Good Morning');
} 
function afternoon(name, callback){
    console.log('Good Afternoon' + name);
callback();
}
// if afternoon is not called, then mrg function wont get activated
afternoon("nitessha",morning);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function whyvirat(){
    console.log('i also dont know about virat');
}
function viratkohliRtirement(callback){
    callback();
}
viratkohliRtirement(whyvirat)
// ---------------------------------------------------------------------------------------------------------

// *arrow function
const vijaythalapathy = () => {
    console.log('best movie polliceodu')

} 
vijaythalapathy()



