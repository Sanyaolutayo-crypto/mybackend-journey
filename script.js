//Basic conversion(traditionan function to arrow function)
//Traditional function
function add(a,b) {
    return a+b;
}
//Arrow function
const add =(a,b) => {
    return a+b;
};
//Shorter Arrow function (implicit return)
const add =(a,b)=> a+b;  //no return statement{}
//one parameter (traditional)
function square(x) {
    return x *x;
}
//Arrow
const square = x => x*x; //no parentheses needed for one parameter
//No parameter(traditional)
function greet() {
    return "Hello";
}
//Arrow
const greet =() => "Hello"; //must use() if no parameter
//Multiple lines (Block Body)
//if your function has more than one line,use{} and return:
const multiply = (a,b) => {
    const result = a*b;
    return result;
};
//Returning an object (you must wrap the object in parentheses)
const createUser = (name, age)=>({
    name: name,
    age: age
});
//Arrow function inside array methods
const numbers = [1,2,3,4];
const doubled = numbers.map(num =>num * 2);
console.log(doubled);
console.log()


//const userCache
const userCache = map();
//add users
usersCache.set(1, { name:"Temitayo", age:20});
userCache.set(2, { name:"john", age: 25 });
console.log()
//get user
console.log(user)