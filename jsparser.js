const fs = require('fs')
csvfile = fs.readFileSync('./simple.csv')
const arr = csvfile.toString().split('\n') //convert the csv to string
//console.log(arr);
var jsonObj = []
var headers = arr[0].split(",")  //get the title/header
//console.log(headers);
for(var i=1; i<arr.length;i++){
    var data = arr[i].split(',')
    var object = {};
    for(var j=0; j<data.length;j++){
        object[headers[j].trim()] = data[j].trim();
    }
    jsonObj.push(object)
}

console.log("<=============================================>");
console.log(JSON.stringify(jsonObj));
console.log("<=============================================>");
console.log(jsonObj);