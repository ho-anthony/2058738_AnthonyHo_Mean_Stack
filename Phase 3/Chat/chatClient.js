let ws = new WebSocket("ws://localhost:9090");

// ws.onopen = () => {
//     ws.send("Hi SERVER HIHIHIHIH");
// }

function getMessage(uName,uMessage) {
    let newMessage = uName.value + " says: " + uMessage.value;
    ws.send(uMessage.value);
    let chatLog = document.getElementById("chat");
    let newLine = document.createElement("p");
    newLine.innerHTML = newMessage;
    chatLog.appendChild(newLine);
    ws.onmessage = (msg) => {
        let replyLine = document.createElement("p");
        replyLine.innerHTML= "Server says: " + msg.data;
        chatLog.appendChild(replyLine);
    }
}