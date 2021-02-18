var Dog = require('./Dog');
var Cat = require('./Cat');
var dog = new Dog('Tom');
var jerry =  new Cat();
dog.eat(jerry);
console.log(dog);
dog.sayHi();