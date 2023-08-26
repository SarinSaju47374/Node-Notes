//Comment Out Each Experiments to visualize the result

const fs = require("node:fs")
//🌟 User Written sync code and async microtask queue (Experiment 1)
// console.log("THis will print first");
// process.nextTick(()=>{
//     console.log("This is get to be printed first as soon as the Call Stack is Empty (Microtask Queues)")
// })
// console.log("THis will print second");




//🌟 Two micro task queues (Experiment 2)
// Promise.resolve().then(()=>{console.log("THis is will be logged after the first microtask queue nextTick")})
// process.nextTick(()=>{
//     console.log("This is get to be printed first as soon as the Call Stack is Empty)")
// })

//🌟 Multiple queues (Experiment 3 and 4)
// setTimeout(()=>console.log("seTimeout 1"),0)
// setTimeout(()=>{
//     console.log("seTimeout 2")
//     process.nextTick(()=>console.log("THis is inner process.nextTick inside Timer queue"))
// },0)
// setTimeout(()=>console.log("seTimeout 3"),0)

// process.nextTick(()=>{
//     console.log("THis is process.nextTick 1")
// })
// process.nextTick(()=>{
//     console.log("THis is process.nextTick 2")
//     process.nextTick(()=>console.log("This is inner process.nextTick inside newxt Tick."))
// })
// process.nextTick(()=>{
//     console.log("THis is process.nextTick 3")
// })

// Promise.resolve().then(()=>{console.log("This is Promise.resolve 1")})
// Promise.resolve().then(()=>{
//     console.log("This is Promise.resolve 2")
//     process.nextTick(()=>{console.log("This is inner process.nextTick inside Promise then Block.")})
// })
// Promise.resolve().then(()=>{console.log("This is Promise.resolve 3")})


//🌟 Experiment 5
// setTimeout(()=>console.log(1),100)
// setTimeout(()=>console.log(2),10)
// setTimeout(()=>console.log(3),0)


//🌟 Experiment 6
// fs.readFile(__filename,()=>{console.log("This is readFile 1")})

// process.nextTick(()=>console.log("This is process.nextTick 1"))
// Promise.resolve().then(()=>console.log("This is Promise.resolve 1"))

//🌟 Experiment 7 and 8
// setTimeout(()=>console.log("This is seTimeout 1"),0)
// fs.readFile(__filename,()=>{console.log("This is readFile 1")})
// process.nextTick(()=>console.log("This is process.nextTick 1"))
// Promise.resolve().then(()=>console.log("This is Promise.resolve 1"))


/*🌟 Experiment 9 (The ouput wasnt expected right 😂 as per the rules. 
Well you must know whats I/O Polling 🤗)*/

// setTimeout(()=>console.log("This is seTimeout 1"),0)
// fs.readFile(__filename,()=>{console.log("This is readFile 1")})
// setImmediate(()=>console.log("THis is setImmediate 1"))
// process.nextTick(()=>console.log("This is process.nextTick 1"))
// Promise.resolve().then(()=>console.log("This is Promise.resolve 1"))

/*
How it moves throughout the event loop for above code execution ?🤯

After Call stack executes the code in the code snippet we endup 
with a callback in nextTick queue,Promise queue and Timer queue.

Rememeber that the I/O queue is empty cuz I/O polling hasnt been
completed yet. 

Now the Control moves into the nextTick queue and 
dequeues the callback and executes it. 

Since NextTick is empty the 
control moves to Promise queue and dequeues the callback and executes
it.

Since Promise queue is empty the control moves to Timer Queue ,deques the callback 
funciton and executes it . 

Then comes the I/O queue which is empty. Then begins the I/O polling phase which 
checks whether the readFile operation is complete or not . If its complete it 
pushes the associated callback to the I/O queue

During that phase the Event loop proceeds to check the Check queue and see the callback
function, dequeues it and executes it . 

Then Event loop further proceeds to check the close queue and see its empty.

Event Loop then Proceeds to second iteration and checks that Microtask queue(nextTick and Promise queue) , Timer queue is empty.

Then Checks the I/O queue which is having a callback function which was pushed in prev
iteration in I/O polling phase. The callback Funciton is dequeued adn executed and checks the 
further queues.

🌟🌟🌟🌟 As Event loop further moves to other queue it repeatedly checks the Microtask Queue.

*/


//🌟 Experiment 10  (In this we moved the setImmediate inside the fs.readFile (I/O operation))

// setTimeout(()=>console.log("This is seTimeout 1"),0)
// fs.readFile(__filename,()=>{
//     console.log("This is readFile 1")
//     setImmediate(()=>console.log("THis is inner setImmediate 1 inside the fs.readFile"))
// })
// process.nextTick(()=>console.log("This is process.nextTick 1"))
// Promise.resolve().then(()=>console.log("This is Promise.resolve 1"))

/*
How it moves throughout the event loop for above code execution ?🤯

After Call stack executes the code in the code snippet we endup 
with a callback in nextTick queue,Promise queue and Timer queue.

Rememeber that the I/O queue is empty cuz I/O polling hasnt been
completed yet. 

Now the Control moves into the nextTick queue and 
dequeues the callback and executes it. 

Since NextTick is empty the 
control moves to Promise queue and dequeues the callback and executes
it.

Since Promise queue is empty the control moves to Timer Queue ,deques the callback 
funciton and executes it . 

Then comes the I/O queue which is empty. Then begins the I/O polling phase which 
checks whether the readFile operation is complete or not . If its complete it 
pushes the associated callback to the I/O queue

During that phase the Event loop proceeds to check the Check queue and Close Queue which is Empty.
 

Event Loop then Proceeds to second iteration and checks that Microtask queue(nextTick and Promise queue) , Timer queue is empty.

Then Checks the I/O queue which is having a callback function which was pushed in prev
iteration in I/O polling phase. The callback Function is dequeued and executed in which it 
comes across the setImmediate function which pushes the callback function to the 
Check queue .

Event further proceeds to check the Check queue which has a callback queue which 
dequeues and executes the callback function.

Now here the setImmediate was executed after the I/O execution ....Amazing Right!😃

🌟🌟🌟🌟 As Event loop further moves to other queue it repeatedly checks the Microtask Queue.

*/


/*🌟 Experiment 11 (This code explains the part where Event Loop Checks the Microtask 
queue after every respective queues in Event Loop)

Between Timer and I/O , I/O and check, check and close the Microtask Queue is Visited for execution 
if callbacks are present
*/

// setTimeout(()=>console.log("This is seTimeout 1"),0)
// fs.readFile(__filename,()=>{
//     console.log("This is readFile 1")
//     setImmediate(()=>console.log("THis is inner setImmediate 1 inside the fs.readFile"))
//     process.nextTick(()=>console.log("This is inner process.nextTick 2 inside fs.readFile"))
//     Promise.resolve().then(()=>console.log("This is inner Promise.resolve 2 inside fs.readFile"))
// })
// process.nextTick(()=>console.log("This is process.nextTick 1"))
// Promise.resolve().then(()=>console.log("This is Promise.resolve 1"))

//🌟 Experiment 12

// setImmediate(()=>console.log("This is setImmediate 1"))
// setImmediate(()=>{
//     console.log("This is setImmediate 2")
//     process.nextTick(()=>console.log("This is inner nextTick 1 inside setImmediate"))
//     Promise.resolve().then(()=>console.log("This is inner Promise.resolve 1 inside setImmediate"))
// })
// setImmediate(()=>console.log("This is setImmediate 3"))

//🌟 Experiment 13

//Case 1 (THe order ain't guaranteed)
// setImmediate(()=>console.log("This is setImmediate 1"))
// setTimeout(()=>{console.log("THis is setTimeOut 1")},0)


//Case 2(The order is guranteed where the Timer callback is dequeued and then the check queue)
// setImmediate(()=>console.log("This is setImmediate 1"))
// setTimeout(()=>{console.log("THis is setTimeOut 1")},0)
// for(let i=0;i<20000000;i++){}

// //🌟 Experiment 14

const readableStream = fs.createReadStream(__filename);
readableStream.close();
readableStream.on("close",()=>{
    console.log("This is from the readable Stream close event Callback")
})
setImmediate(()=>console.log("This is setImmediate 1"))
setTimeout(()=>{console.log("THis is setTimeOut 1")},0)
process.nextTick(()=>console.log("This is process.nextTick 1"))
Promise.resolve().then(()=>console.log("This is Promise.resolve 1"))



