import io from "socket.io-client";

const API_URL = "https://spotim-demo-chat-server.herokuapp.com";
const EVENT_NAME = "spotim/chat";

const socket = io(API_URL);

//connecting to Socket.IO chat server

const connect = () => {
    socket.on("connect", function () {
        console.log("connected to chat server!");
    });
}

const disconnect = () => {
    socket.on("disconnect", function () {
        console.log("disconnected from chat server!");
    });
}

const sendMessage = (data) => {
    data.time = getTime(new Date(Date.now()));
    socket.emit(EVENT_NAME, data, function (response) { });
}

const getTime = (date) => {
    return `${date.getHours()}:${("0" + date.getMinutes()).slice(-2)}`
}

export {
    socket,
    EVENT_NAME,
    connect,
    disconnect,
    sendMessage
}


