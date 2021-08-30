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
    <form action="addTask">
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
    </form>
    <br/><br/>
    <form action="delTask">
        <h2>Delete Task</h2>
        <label>Task Id: </label>
        <input type="text" name="tId"/>
        <input type="submit" value="Delete Task"/>
    </form>
    <br/><br/>
    <h2>List Tasks</h2>
    <form action="showTable">
        <input type="submit" value="List All Tasks"/>
    </form>

</body>
</html> 
`
let tablePage = `
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
    <form action="addTask">
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
    </form>
    <br/><br/>
    <form action="delTask">
        <h2>Delete Task</h2>
        <label>Task Id: </label>
        <input type="text" name="tId"/>
        <input type="submit" value="Delete Task"/>
    </form>
    <br/><br/>
    <h2>List Tasks</h2>
    <form action="showTable">
        <input type="submit" value="List All Tasks"/>
    </form>
    <table border = 1 id="taskTable">
    <thead>
        <tr>
            <th>Emp Id</th>
            <th>Task Id</th>
            <th>Task</th>
            <th>Deadline</th>
        </tr>
    </thead>
    </table>
</body>
</html> 
`

let server = http.createServer((request,response) => {
     let urlInfo = url.parse(request.url,true);
    if(urlInfo.pathname == "/addTask") {
        let data = urlInfo.query;
        let newJson = {"empId":data.eId, "taskId":data.tId, "taskName":data.tName, "deadline":data.deadline}
        try{
            currData = fs.readFileSync("taskList.json");
            let writeList = JSON.parse(currData);
            writeList.push(newJson);
            fs.writeFileSync("taskList.json",JSON.stringify(writeList));
        } catch(err) {
            let writeList = [newJson];
            fs.writeFileSync("taskList.json",JSON.stringify(writeList));
        }
        response.writeHead(200,{"content-type":"text/html"});
        response.write("Task Added!");
        response.write(plannerPage);
    } else if(urlInfo.pathname == "/delTask") {
        let data = urlInfo.query;
        try {
            currData = fs.readFileSync("taskList.json");
            let list = JSON.parse(currData);
            let newList = list.filter((iter) => {return iter.taskId !== data.tId});
            let strList = JSON.stringify(list);
            let strNewList = JSON.stringify(newList);
            if(strList == strNewList) {
                response.writeHead(404,{"content-type":"text/html"});
                response.write("Delete failed. Entry does not exist.");
                response.write(plannerPage);
            } else {
                fs.writeFileSync("taskList.json",strNewList);
                response.writeHead(200,{"content-type":"text/html"});
                response.write("Delete Success!");
                response.write(plannerPage);
            }
        } catch(err) {
            response.writeHead(404,{"content-type":"text/html"});
            response.write("Delete failed. Entry does not exist.");
            response.write(plannerPage);
        }
    } else if(urlInfo.pathname == "/showTable"){
        response.write(tablePage);
    } else {
         response.write(plannerPage);
    }
    response.end();
})

server.listen(9090, () => console.log("Server running on port number 9090"))