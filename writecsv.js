//const fs = require('fs')
//const csv = require('csv')
import { appendFileSync } from 'fs'

class Contact {
    constructor(fname="",lname="",sno="",phone="",address=""){
        this.lname = lname;
        this.fname = fname;
        this.sno = sno;
        this.phone = phone;
        this.address = address;
    }

    saveAsCSV(){
        const csv = `${this.lname},${this.fname},${this.sno},${this.phone},${this.address}\n`
        try{
            appendFileSync('simple.csv', csv);
        } catch (err){
            console.error(err);
        }
    }
}

const startApp = () => {
    const contact = new Contact("g", "h","12","166167788","nigeria");
    contact.saveAsCSV()
}

startApp()





// function writer(data, filename){
//     const file = 
// }