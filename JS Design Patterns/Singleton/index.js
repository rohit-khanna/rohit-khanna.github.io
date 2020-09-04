const singletonInstance1 = require("./singletonObjectLiteral");
const singletonInstance2 = require("./singletonObjectLiteral");

console.log("1. Object Literal Instance");

console.log(singletonInstance1 === singletonInstance2); // true

console.log("--------------------");
console.log("2. SIngleton Class");

const singletonClass = require("./singletonClass").singletonFactory;
const instance1 = singletonClass.getInstance();
const instance2 = singletonClass.getInstance();

console.log("instance1-value:", instance1.currentValue()); //1
instance1.increment();
console.log("instance1-value:", instance1.currentValue()); //2
console.log("instance2-value:", instance2.currentValue()); //2
console.log(instance1 === instance2); // true
console.log("--------------------");

console.log("3. Normal Class");

const normalClass = require("./nonSingletonClass").normalFactory;
const instance3 = normalClass(1);
const instance4 = normalClass(1);

console.log("instance3-value:", instance3.currentValue()); //1
instance3.increment();
console.log("instance3-value:", instance3.currentValue()); //2
console.log("instance4-value:", instance4.currentValue()); //1
console.log(instance3 === instance4); //false
console.log("--------------------");
