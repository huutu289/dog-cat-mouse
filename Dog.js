// var chalk = require('chalk');
function Dog(name){
    this.stomach =[];
    this.name = name;
}
Dog.prototype.eat = function(Cat){
    this.stomach.push(Cat);
}
Dog.prototype.run = function(){
    console.log("dog is running");
}
Dog.prototype.sayHi = function(){
    console.log('hi my name is ' + this.name);
}
module.export = Dog;