function Cat(){
    this.stomatch = [];
}
Cat.prototype.eat = function(Mouse){
    this.stomatch.push(Mouse);

}
module.export = Cat;