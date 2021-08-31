let express = require("express");
let app = express();

let ws = require("express-ws")(app);
let common = ["Hi","Hello","How Are you?","Tell me a fact", "Are you human?", "What's your favorite color?", "1+1", "What's your name?"];
let replies = ["Hey there!", "What's up", "I'm good, how about you?","The sky is blue", "No, I am a bot", "Purple", "2", "Bot Bottington"];
app.ws("/",(socket,request)=> {
    console.log("Client Connected!");

    // recieve message from client application 
    socket.on("message",(msg)=> {
        let currDate = new Date();
        let dateEntry = (currDate.getMonth()+1) + "/" + currDate.getDate() + "/" + currDate.getFullYear();
        let timeEntry = currDate.getHours() +":"+currDate.getMinutes()+":"+currDate.getSeconds();
        let reply = "Message received on: " + dateEntry + " at " + timeEntry;
        console.log("Client says: " + msg);
        let replyIndex = common.findIndex(m => m==msg);
        if(replyIndex != -1) {
            reply = replies[replyIndex]
        }
        console.log("Server Replied: " + reply);
        socket.send(reply);
    });
    
})

app.listen(9090,()=>console.log("Server running on port number 9090"));