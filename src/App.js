import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import CreateRoom from './pages/createroom';


function App() {
  return (
    <BrowserRouter>
    <div className='app' style={{width: "100%"}}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/createroom' element={<CreateRoom />}/>
      </Routes>
    </div>
    </BrowserRouter>
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