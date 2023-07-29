const fs = require('fs')
csvfile = fs.readFileSync('./simple.csv')
const arr = csvfile.toString().split('\n') //convert the csv to separate lines
//console.log(arr);
var jsonObj = []
var headers = arr[0].split(",")  //get the title/header from the first line
//console.log(headers);

for (var i=1; i<arr.length; i++){
    var rawData = arr[i].split(',')
    jsonObj[i] = {};

    for(var j=0; j<rawData.length; j++){
        //console.log(`${headers[j]} : ${rawData[j]}`);
        jsonObj[i][headers[j]] = rawData[j]
    }
}
console.table(jsonObj);