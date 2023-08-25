const data = {name:"Sarin",
             age:24,
            developer:true}

const json= JSON.stringify(data);  //Converting Object to JSON --> They dont modify the original data
console.log(JSON.parse(json));   //Converting JSON to Object --> They dont modify the original data

