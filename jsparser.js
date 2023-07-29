const fs = require('fs')
csvfile = fs.readFileSync('./simple.csv')
const arr = csvfile.toString().split('\n') //convert the csv to separate lines
//console.log(arr);
var jsonObj = []
var headers = arr[0].split(",")  //get the title/header from the first line
//console.log(headers);
for(var i=1; i<arr.length;i++){ //iterate the rest of the lines
    var data = arr[i].split(',') //iterate through the raw data of each line
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