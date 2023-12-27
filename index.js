
const  http = require("http");

const fs = require("fs");

const path = require("path");

const url = require('url')


 http.createServer((request,response)=>{

    response.write("Hello node");

    response.end();
    
}).port(3000);



const data = fs.writeFileSync('./Welcome.txt',"Hello Node")
const data1 = fs.readFileSync('./welcome.txt','utf8')

const result = path.basename('./phpCLI.txt')

let lien = 'http://localhost:3000/index.html?lastName=Rehane&firstName=Ahmed'

let qry = url.parse(lien,true);


let qryData = qry.query

console.log(data)
console.log(result)
console.log(qryData.firstName)