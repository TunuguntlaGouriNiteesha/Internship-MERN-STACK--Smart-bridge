let count = 0;
// first select tags
const button = document.getElementById('counter-btn');
const display = document.getElementById('count-display');
button.addEventListener("click",function () {
    count++;
    display.textContent = 'Count: ' + count;
});
// *dom manipulation->document object model
//? dom states that every tag in web page  is treated as a branch of a tree
