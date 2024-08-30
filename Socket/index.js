const { disconnect } = require("mongoose");
const { Server } = require("socket.io");

const io = new Server({ cors:" http://localhost:5173" });

let onlineUsers =[];

io.on("connection", (socket) => {
    // console.log("new conncetion",socket.id)

    socket.on("addNewUser",(userId)=>{
        !onlineUsers.some(user=>user.Id===userId) &&
        onlineUsers.push({
            userId,
            socketId:socket.id,
        });
        
    //console.log("online users",onlineUsers);
    io.emit("getOnlineUsers",onlineUsers);
    });

    //add message

    socket.on("sendMessage",(message)=>{
        const user=onlineUsers.find(user=>userId===message.recipientId)

        if(user){
            io.to(user.socketId).emit("getMessage",message)
        }

    })

    socket.on("disconnect",()=>{
        onlineUsers=onlineUsers.filter((users)=>user.socketId!==socket.id)
        io.emit("getOnlineUsers",onlineUsers); 
    })

});

io.listen(3000);

