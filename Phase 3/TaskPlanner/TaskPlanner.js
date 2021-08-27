let http = require("http");
// let url = require("url");
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
    <form>
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
    <form>
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
    response.write(plannerPage);
})

server.listen(9090, () => console.log("Server running on port number 9090"))