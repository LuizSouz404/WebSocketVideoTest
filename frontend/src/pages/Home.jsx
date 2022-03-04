import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import {MdLogin} from 'react-icons/md'

import illustrationImage from '../assets/hangout.svg';
import logo from '../assets/Logo.svg';
import { CreateRoomButton, HomeContainer, MainContent, Separator, LogoContainer, EnterRoomButton } from '../styles/Home';

export const Home = () => {  
    const navigate = useNavigate();  
    const [roomCode, setRoomCode] = useState('');

    function handleCreateRoom() {  
        navigate('/room/new')
    }
    
    function handleJoinRoom(event) {
        event.preventDefault();
        console.log("entrou nafunção")
    
        /*
        if (roomCode.trim() === '') {
          return;
        }
        const roomRef = await database.ref(`rooms/${roomCode}`).get();
    
        if (!roomRef.exists()) {
          alert('Room does not exists.');
          return;
        }
    
        if (roomRef.val().endedAt) {
          alert('Room already closed.');
          return;
        }
    */
        navigate(`/room/${roomCode}`);
    }


    return (
        <HomeContainer>
            <aside>
                <img src={illustrationImage} alt="Ilustração simbolizando chat de video" />
                <strong>Crie salas de chat e video</strong>
                <p>Comunique-se com sua equipe em tempo real</p>
            </aside>

            <main>
                <MainContent>
                    <LogoContainer>
                        <img src={logo} alt="Callwala" />
                        <span>CALLWALA</span>
                    </LogoContainer>

                    <CreateRoomButton onClick={() => handleCreateRoom()}>
                        <FcGoogle size={24}/>
                        Crie uma sala com o Google
                    </CreateRoomButton>
                    
                    <Separator>ou entre em uma sala</Separator>

                    <form onSubmit={handleJoinRoom}>
                        <input 
                        type="text"
                        placeholder="Digite o código da sala"
                        onChange={event => setRoomCode(event.target.value)}
                        value={roomCode}
                        />
                        <EnterRoomButton type="submit">
                            <MdLogin size={24}/>
                            Entrar na sala
                        </EnterRoomButton>
                    </form>
                </MainContent>
            </main>
        </HomeContainer>
    )
}