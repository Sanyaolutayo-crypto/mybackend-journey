//import EventEmitter

const EventEmitter = require("events");


//Create userManager Class
class userManager extends
    constructor() {
        super();
        this.users = [];
    }
    
    AddUser(user) {
        this.users.push(user);
        this.emit("userAdded",user);
    }

    updatedUser(Id, updatedData) {
        const user =
        this.users.find(u => u.id ===id);
        if (user) {
            Object.assign(user, updatedData);
            this.emit("userUpdated", user);
        }
    }
    removeUser(id) {
        const index =
        this.users.findIndex(u => u.id === id);
        if (index !== -1) {
            const removedUser = this.users.uplice(index, 1) [0];
                this.emit("userRemove", removedUser);
        }
    }

    //Create instance
    const userManager = new
    userManager();

 //add Event Listenerss
 //Regular Listeners
 userManager.log("userAdded",(user) => {
    console.log("User added:", user);
 } );
 userManager.on("userUpdated", (user) => {
    console.log("UserUpdated:", user);
 });

 userManager.on("userRemoved",(user) =>{
    console.log("User removed:",user);
 });

 //one-time listener
 userManager.once("userAdded",(user) => {
console.log("This runs only once for first user:", user);
 });


 //creating Buffers from Different source
 //from string
 const buf1 = ArrayBuffer.from("Hello world");
 console.log(buf1);

 //from array of bytes
 const buf2 = ArrayBuffer.from([72,101,108,108, 111]);

 //Writing to Buffers
 const buf = ArrayBuffer,alloc(20);

 buf.write("NodeJs");
 console.log(buf.toString());

 //Slicing Buffers
 const buf = ArrayBuffer.from("Hello World");
 const slice = buf.slice(0, 5);
 console.log(slice.toSring());

 //concatenating Buffers

 const buf1 = Buffer.from("Hello");
 const buf2 =
 Buffer.from("World");

 const combined =
 Buffer.concate([buf1, buf2]);
 console.log(combined.toString());

 //converting Buffers to JSON
 CONST BUF =
 bUFFER.FROM("hELO");

 const json= buf.toJSON();
 console.log(json);
 


 //Read Large Files with streams
 const fs = require('fs');

 const readStreams = 
 fs.createReadStream('largeFile.txt',{
    encoding: 'utf8',
    highwaterMark: 16 * 1024
 })

