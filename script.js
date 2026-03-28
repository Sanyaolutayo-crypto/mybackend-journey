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


//optional chaining(?.)--> prevents errors if something is null or undefined
//Nullish coalescing(??)-->gives a default value if result is null or undefined
//example
const user ={
    name: "Temitayo", address: {
        city:"Lagos"
    }
};
console.log(user.address?. city?? "No city"); //Lagos
console.log(user.contact?. phone ?? "No phone"); //no phone
//safe proile acess
const profile = {username: "dev123", social: {
    twitter: "@dev"
}
};
//Access twitter safely, default: "Not available"
//or
console.log(profile. social?. twitter ?? "Not available");
//Deep Nested object
const student = {
    name: "john",school:{
        address: {
            city: "Abuja"
        }
    }
};
console.log(student.school?.address?.city ?? "unknown");
//Missing Data
const product = {
    name: "Laptop"
};
//get practice safely,default
console.log(product.price ??0);
//Function + Optional Chaining
const uers = {
    greet: () =>"Hello!"
};
//call greet safely
console.log(user.greet?.() ?? "No greeting");
//Array Access
const users = [{name: "A"},
    null,
    {name: "C"}
];con
//Sccess second user's name safely
console.log(users[1]?.name ??"No user");





