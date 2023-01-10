const baseObj = {
    x: 1,
}
baseObj.i = 6;
const extendedObj = {
    ...baseObj,
    y: 2,
}

class BaseObj {
    // x = 1;// default value
    // y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    addNumbers() {
        // method
        return this.x + this.y;
    }
    multiply(x, y) {
        return x * y;
    }
}
(() => {
    console.log("IIFE works!");
})();// IIFE 
const regularArrowFunc = () => {};
regularArrowFunc();
function regularFunc() {};
const baseObjViaClass = new BaseObj(5, 2);
const addNumberResult = baseObjViaClass.addNumbers();
const multiplyResult = baseObjViaClass.multiply(2, 3)
console.log(baseObjViaClass);
console.log(addNumberResult, multiplyResult);
// const testFunc = (arg1, arg2) => {

// }
// testFunc();