let express = require("express");
let app = express();
let http = require("http").Server(app);
let io = require('socket.io')(http);

let mongoose = require("mongoose");
let url = "mongodb://localhost:27017/tcsmean";
mongoose.pluralize(null);   
mongoose.connect(url).then(res=>console.log("connected")).catch(err=>console.log(err));
let chatSchema = mongoose.Schema({
    name:String,
    message:String
});
let chatModel = mongoose.model("ChatLog", chatSchema);
mongoose.disconnect();

app.get("/",(request,response)=> {
    response.sendFile(__dirname+"\\chatLog.html");
})

io.on("connection",(socket)=> {
    console.log("Client Connected!");
    socket.on("con",(msg)=> {
        console.log(msg);
    })

    socket.on("message",(msg)=> {
        mongoose.connect(url).then(res=>console.log("connected")).catch(err=>console.log(err));
        let db = mongoose.connection;
        db.once("open",() => {
            let newMessage = new chatModel({name:msg.name, message:msg.message});
            newMessage.save((err,result)=> {
                if(!err){
                    console.log(result)
                } else {
                    console.log(err);
                }
                mongoose.disconnect();  
            })
        })
    })
})


http.listen(9090,()=>console.log("Server running on port number 9090"));