//Events Module
/* Node js has a built in module, called "Events" where you can -create,-fire and   
listen for  your own events 

Example 1: Registering for the events to be fired only one time using once
Example 2: Create an event emitter instance and register a couple of callbacks
Example 3: Registering for the event with callback parameters
*/


// Note This is a special Event handler where event name is totally upon us. 
// 1:

let EventEmitter = require("events");
let event = new EventEmitter();

event.on("myEvent",()=>{    //Event Definiton
    console.log("Event is called amigos!");
})

event.emit("myEvent"); //Event Fire

//2:

event.on("multiCall",()=>{
    console.log("I am called amigo!")
})

event.on("multiCall",()=>{
    console.log("I am called Aliya!")
})

event.on("multiCall",()=>{
    console.log("I am called Bhaijaan!")
})

event.emit("multiCall");

//3:

event.on("check",(sc,msg)=>{
    console.log(`The status code is ${sc} ${msg}`);
})

event.emit("check",200,"ok");