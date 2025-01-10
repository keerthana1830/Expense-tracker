const fs = require("fs")
const http = require("http")

fs.readFile("./sample.json",'utf8',(err,data)=>{
    if(err) {
        console.log("Cannot open file")
        return}
    const users = JSON.parse(data)
    const filteredData = users.filter((user) => user.amount > 1500)
    console.log(filteredData)
    fs.writeFile("./data.json",JSON.stringify(filteredData),(err)=>{
        if(err) {console.log("Error Writing the file")
            return }
    })

const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write(JSON.stringify(filteredData))
    res.end()
})
server.listen(3000, () => {
    console.log("server is running on port http://localhost:3000/")
})
})

