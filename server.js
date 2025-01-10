//Node.js as RTE
//console.log("Hello")//this line gets compiled by means of Node.js


//Creation of a simple server 
/*
const http = require("http")

const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write("Hello World\n")
    res.end()
})
server.listen(3000, () => {
    console.log("server is running on port http://localhost:3000/")
})
*/
/*
const modules = require("./modules")//export module from modules.js file
console.log(modules.add(10,20))//calls the add function from the module and prints the result
//reusability,portability,abstraction features,encapsulation features
*/


const http = require("http")
const modules = require("./modules")
const a = 100
const b = 30
const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write("The values are: "+a+" and "+b+"\n")
    res.write("Addition:"+modules.add(a,b)+"\n")
    //res.write(`Addition: ${modules.add(a,b)}`)    //[String interpolation]
    res.write("Subtraction:"+modules.subtract(a,b)+"\n")
    res.write("Multiplication:"+modules.multiply(a,b)+"\n")
    res.write("Division:"+modules.divide(a,b)+"\n")
    res.end()
})
server.listen(3000, () => {
    console.log("server is running on port http://localhost:3000/")
})
