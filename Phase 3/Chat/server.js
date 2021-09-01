let express = require("express");
let app = express();
let http = require("http").Server(app);
let io = require('socket.io')(http);
let common = ["hi","hello","how are you?","tell me a fact", "are you human?", "what's your favorite color?", "1+1", "what's your name?"];
let replies = ["Hey there!", "What's up", "I'm good, how about you?","The sky is blue", "No, I am a bot", "Purple", "2", "Bot Bottington"];

io.on("connection",(socket)=> {
    console.log("Client connected");
    socket.on("con",(msg)=> {
        console.log(msg);
    })

    socket.on("message",(msg)=> {
        let currDate = new Date();
        let dateEntry = (currDate.getMonth()+1) + "/" + currDate.getDate() + "/" + currDate.getFullYear();
        let timeEntry = currDate.getHours() +":"+currDate.getMinutes()+":"+currDate.getSeconds();
        let reply = "Default Message - Message received on: " + dateEntry + " at " + timeEntry;
        console.log("Client says: " + msg);
        let replyIndex = common.findIndex(m => m==msg.toLowerCase());
        if(replyIndex != -1) {
            reply = replies[replyIndex]
        }
        console.log("Server Replied: " + reply);
        socket.emit("repMsg",reply);
    })
})

http.listen(9090,()=>console.log("Server running on port number 9090"));