function Dog(){
    this.stomach =[];
}
Dog.prototype.eat = function(Cat){
    this.stomach.push(Cat);
}
Dog.prototype.run = function(){
    console.log("dog is running");
}