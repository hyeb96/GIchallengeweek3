/* EASY: Write a function that would allow you to do this:
var run = exercise('running');
console.log(run()); // prints "Today's exercise: running" var swim = exercise('swimming');
console.log(swim()); // prints "Today's exercise: swimming" */

function exercise(x) {
    function Exercising() {
        return `Today's exercise : ${x}`
    }
    return Exercising;
}
var run = exercise('running');
console.log(run());
var swim = exercise('swimming');
console.log(swim()); 
