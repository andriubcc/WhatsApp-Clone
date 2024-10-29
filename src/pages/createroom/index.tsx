import { Container } from "./styles";
import React, { useState } from "react";
import  socket  from "socket.io-client";

const io = socket('http://localhost:4000');


function CreateRoom() {
    const [ roomName, setRoomName] = useState('');

    const handleJoin = () => {
        if(roomName) {
          io.emit("join", roomName);
        }
      }

    return (
        <Container>
             <div>
        <span>Nome da sala</span>
        <input  value={roomName} onChange={(e) => setRoomName(e.target.value)} onKeyDown={(e) => {if (e.key === "Enter") handleJoin()}}/>  
        <button onClick={() =>handleJoin()}>Entrar</button>
      </div>
        </Container>
    )
}


export default CreateRoom;