let fs = require("fs");
let rl = require("readline-sync");
let dataLog;
try{
    dataLog = fs.readFileSync("log.json");
    let fullList = JSON.parse(dataLog);
    fullList.push(newJson());
    let formatResult = JSON.stringify(fullList);
    fs.writeFileSync("log.json",formatResult);
} catch (err) {
    fs.writeFileSync("log.json","");
    let list = [newJson()];
    let formatResult = JSON.stringify(list);
    fs.writeFileSync("log.json",formatResult);
}

function newJson() {
    let fname = rl.question("Enter your first name: ");
    let lname = rl.question("Enter your last name: ");
    let gen = rl.question("Enter your gender: ");
    let mail = rl.questionEMail("Enter your email: ");
    let currDate = new Date();
    let dateEntry = (currDate.getMonth()+1) + "/" + currDate.getDate() + "/" + currDate.getFullYear();
    let timeEntry = currDate.getHours() +":"+currDate.getMinutes()+":"+currDate.getSeconds();
    let jsonForm = {firstName:fname,lastName:lname,gender:gen,email:mail,date:dateEntry,time:timeEntry}
    return jsonForm;

}