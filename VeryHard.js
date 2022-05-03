/* VERY HARD: Object prototype chain and prototypal inheritance exercise.
1. Create a Person constructor that has three properties: name, job, and age.
2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".
See next page...
4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers? */

function Person(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
    this.exercise = function () {
        return ("Running is fun! - said no one ever");
    }
}

Person.prototype.fetchJob = function () {
    return (`${this.name} is a ${this.job}`);
};

function Programmer(name, job, age, languages, busy) {
    this.name = name;
    this.job = job;
    this.age = age;
    this.languages = [languages];
    this.busy = true;
    this.completeTask = function () {
        return this.busy = false;
    }
};

Programmer.prototype.acceptNewTask = function () {
    return this.busy = true;
};

Programmer.prototype.offerNewTask = function () {
    if (this.busy === true) {
        return `${this.name} can't accept new task right now`;
    } else {
        `${this.name} would love to take on a new responsiblity`;
    }
};

Programmer.prototype.learnLanguage = function (language) {
    this.languages.push(language);
    return (`${this.name} learned ${this.languages}`);
}

Programmer.prototype.listLanguage = function () {
    return (`${this.name} knows ${this.languages}`);
};

const person1 = new Person("John", "Janitor", 30);
const programmer1 = new Programmer("Mark", "Dancer", 24);
const programmer2 = new Programmer("Lola", "Cook", 20);
console.log(person1.exercise());
console.log(person1.fetchJob());
console.log(programmer1.offerNewTask());
console.log(programmer2.learnLanguage('spanish'));
console.log(programmer2.listLanguage());
