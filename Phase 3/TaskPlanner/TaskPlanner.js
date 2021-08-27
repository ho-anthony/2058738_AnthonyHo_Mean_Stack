let http = require("http");
 let url = require("url");
let fs = require("fs");
let plannerPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2 style="text-align:center">Task Planner</h2>
    <form action="add">
        <h2>Add Task</h2>
        <label>Emp Id: </label>
        <input type="text" name="eId"/><br/>
        <label>Task Id: </label>
        <input type="text" name="tId"/><br/>
        <label>Task: </label>
        <input type="text" name="tName"/><br/>
        <label>Deadline: </label>
        <input type="text" name="deadline"/><br/>
        <input type="submit" value="Add Task"/>
       <input type="reset" value="reset"/> <br/>
    </form>
    <br/><br/>
    <form action="del">
        <h2>Delete Task</h2>
        <label>Task Id: </label>
        <input type="text" name="tId"/>
        <input type="submit" value="Add Task"/>
    </form>
    <br/><br/>
    <h2>List Tasks</h2>
    <button> List All Tasks </button>

</body>
</html> 
`
let server = http.createServer((request,response) => {
    let urlInfo = url.parse(request.url,true);
    if(urlInfo.pathname == "/add") {
        let data = urlInfo.query;
        let newJson = {"empId":data.eId, "taskId":data.tId, "taskName":data.tName, "deadline":data.deadline}
        console.log(newJson);
        try{
            currData = fs.readFileSync("taskList.json");
            let writeList = JSON.parse(currData);
            writeList.push(newJson);
            fs.writeFileSync("taskList.json",JSON.stringify(writeList));
        } catch(err) {
            console.log(err);
            let writeList = [newJson];
            fs.writeFileSync("taskList.json",JSON.stringify(writeList));
        }
    } else {
        response.write(plannerPage);
    }
})

server.listen(9090, () => console.log("Server running on port number 9090"))