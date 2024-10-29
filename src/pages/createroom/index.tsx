import { Container } from "./styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  socket  from "socket.io-client";

const io = socket('http://localhost:4000');


function CreateRoom() {
  const [ roomName, setRoomName] = useState('');
  const [ name ] = useState('');
  
  const handleJoin = () => {
    if(name ||roomName) {
      io.emit("join", name, roomName);
      localStorage.setItem('joined', 'true');
      navigate('/');
    }
  }
  
  const navigate = useNavigate();

  return (
        <Container>
             <div>
        <span>Nome da sala</span>
        <input  value={roomName} onChange={(e) => setRoomName(e.target.value)} onKeyDown={(e) => {if (e.key === "Enter") handleJoin();}}/>  
        <button onClick={() => {handleJoin(); navigate('/')}}>Entrar</button>
      </div>
        </Container>
    )
}


export default CreateRoom;