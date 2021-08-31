let express = require("express");
let app = express();

let ws = require("express-ws")(app);

app.ws("/",(socket,request)=> {
    console.log("Client Connected!");

    // recieve message from client application 
    socket.on("message",(msg)=> {
        let currDate = new Date();
        let dateEntry = (currDate.getMonth()+1) + "/" + currDate.getDate() + "/" + currDate.getFullYear();
        let timeEntry = currDate.getHours() +":"+currDate.getMinutes()+":"+currDate.getSeconds();
        let reply = "Message received on: " + dateEntry + " at " + timeEntry;
        console.log(msg);
        console.log("Server Replied: " + reply);
        socket.send(reply);
    });

    
})

app.listen(9090,()=>console.log("Server running on port number 9090"));