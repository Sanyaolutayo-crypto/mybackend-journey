//simulate asynchronous operations with callsbacks
//asynchronous operation happen later. not immediatly(e.g feching data, reading files).
function fetchData (callback) {
    console.log("Fetching data...");

    setTimeout((=>){
        const data = { name:
            "john", age: 25 };
            callback(data);
    }, 2000 );
}

fetchData(function(result){
    console.log("Data received:",result);
});

//demostrate callback hell with nested callbacks
//a callback is simplly a function passed into another function
function getUser(callbck) {
    setTimeout(() => {
        console.log("Got user");
        callack({ id: 1, name:
 "Temitayo" }); 
     }, 1000);
}


function getOrders(userId,callback) {
    setTimeout(() => {
        console.log("Got orders");
        callack([{ id: 101, item:
 "Laptop" }]); 
     }, 1000);
}


function 
getOrderDetails(ordeId,callback) {
    setTimeout(() => {
        console.log("Got order details");
        callack({ id: getOrderDetails, status: "Shipped"}); 
     }, 1000);
}

// CallBack Hell Starts Here
getUser (function(user){
    getOrders(user.id,
        function(orders){

            getOrderDetails(orders[0].id,function(details) {
                console.log("FinalResult:", detais);
            });
        });
});

    

//Implementation of Error-Fitst caback pattern
function divide(a , b, callback)
{
 if (b === 0) {
    callback("Error: Cannot divide by zero", null);
 }else{
    const result = a/b;
    callback(null, result);
 }
}

//using it
divide(10, 2, function(err,result)
[
    if (err) {
        console.log(err);
    }else{
        console.log("Result:", result);
    }
]);

divide(10, 0, function(erro,result) {
    if (err) {
        console.log(err);
    }else{
        console.log("Result:", result);
    }
});

divide (10, 0, function(err,result) {
    if (err) {
        console.log(err);
    }else{
        console.log("Result:",result);
    }
});



//creating a simple Event Emitter
//an event emitter lets you listen for events and trigger them.
Class EventEmitter {c
    constructor() {
        this.event = {};
    }
    //register listener
    on(event, listener){
        if (! this.events[event]){
            this.events [event] = [];
        }

    this.event[event].push(listener);
    
    }

    //Emit event
    emit(event, date) {
        const listeners =
        this.events[event];
        if (listeners) {

     listeners.forEach(listener => listener(date));
        }
    }
}
// usage
const emitter = new
EventEmitter();

emitter .on("greet",(name) => {
    console.log("Hello" + name);
});

emitter. on("greet", (name) => {
    console.log("Welcome" + name);
});

emitter .emit("greet", "Temitayo");




//creating a promise from Scratch  (Basic structure)
//A promise is an object that represent:pending, Resolved(fulfilled), Rejected












