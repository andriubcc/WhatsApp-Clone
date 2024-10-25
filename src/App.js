import './App.css';
import { useEffect, useState } from 'react';
import  socket  from 'socket.io-client';
import Image from './assets/profissao-programador-logo.jpg'
import SendMessageIcon from './assets/send.png'

const io = socket('http://localhost:4000');

function App() {
  const [ name, setName ] = useState('');
  const [ joined, setJoined ] = useState('');
  const [ users, setUsers ] = useState([]);
  const [ message, setMessage ] = useState('');
  const [ messages, setMessages ] = useState([]);

  useEffect(() => {
    io.on("users", (users) => setUsers(users));
    io.on("message",(message) => setMessages((messages) => [...messages, message]));
  }, []);


  const handleJoin = () => {
    console.log(name)

    if(name) {
      io.emit("join", name);
      setJoined(true);
    }
  }

  const handleMessage = () => {
    if(message){
      io.emit("message", {message, name});
      setMessage("");
    }
  }

  if (!joined) {
    return (
      <div>
        <span>Digite seu nome</span>
        <input value={name} onChange={(e) => setName(e.target.value)} onKeyDown={(e) => {if (e.key === 'Enter') handleJoin();}}/>       
        <button onClick={() =>handleJoin()}>Entrar</button>
      </div>
    )
  }


  return (
    <div className='container'>
      <div className='back-ground'></div>
      <div className='chat-container'>

        <div className='chat-contacts'>
          <div className='chat-options'></div>
          <div className='chat-item'>
            <img  src={Image} className='image-profile' alt='' />
            <div className='title-chat-container'>
              <span className='title-message'>NetWorking: Profissão Programador</span>
              <span className='last-message'>
                {messages.length? `${messages[messages.length - 1].name}: ${messages[messages.length - 1].message}` : ''}
                </span>
            </div>
          </div>
        </div>

        <div className='chat-messages'>
          <div className='chat-options'>
          <div className='chat-item'>
              <img  src={Image} className='image-profile' alt='' />
              <div className='title-chat-container'>
                <span className='title-message'>NetWorking: Programador</span>
                <span className='last-message'>
                  {users.map((user, index) => (
                    <span>{user.name}{index + 1 < users.length? ', ' : ''}</span>
                  ))}
                </span>
              </div>
            </div>
          </div>
          
          <div className='chat-messages-area'>
                  {messages.map((message, index) => (
                    <div className={message.name === name? 'user-container-message right' : 'user-container-message left'}>
                      <div key={index} className={message.name === name? 'user-my-message' : 'user-other-message'}>
                        <span className='user-name-message'>{message.name === name? '' : `${message.name}`}</span> 
                        <span className='user-message'>{message.message}</span>
                      </div>
                    </div>
                  ))}
          </div>

          <div className='chat-input-area'>
            <input
            onKeyDown={(e) => {if (e.key === "Enter") handleMessage();}} 
            className='chat-input'
            placeholder='Mensagem'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
            <img src={SendMessageIcon} alt='' className='send-message-icon' onClick={() => handleMessage()}/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;



// criar tela de inserçao de nome 
// melhorar exibiçao do nome no chat - feito
// estudar documentaçao do socket.io principalmete o rooms para criar outros chats

// implementaçao de cadastro e login
// mostrar quantidade de mensagens nao lidas
// ser possivel transitar entre diferentes conversas
// ser possivel fixar uma conversa ao topo