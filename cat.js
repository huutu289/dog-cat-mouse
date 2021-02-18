function Cat() {
    this.stomatch = [];
}
Cat.prototype.eat1 = function (Mouse) {
    this.stomatch.push(Mouse);
}
module.exports = Cat;