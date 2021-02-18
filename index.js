var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');


var dog = new Dog('Tom');
var tom =  new Cat();
var mouse = new Mouse('Mickey');
dog.eat(tom);
console.log(dog);
dog.sayHi();

tom.eat(mouse);
console.log(tom);

try{
    tom.eat(dog);

}catch (error){
console.log('Error while cat eating a dog');
}