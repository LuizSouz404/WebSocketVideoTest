import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import {MdLogin} from 'react-icons/md'

import illustrationImage from '../assets/hangout.svg';
import logo from '../assets/Logo.svg';
import { NewRoomContainer, MainContent, LogoContainer, EnterRoomButton } from '../styles/NewRoom';
import {v4 as uuidV4} from 'uuid';

export const NewRoom = (props) => {  
    const navigate = useNavigate()
    const [newRoom, setNewRoom] = useState('');
  
    async function handleCreateRoom(event) {
      event.preventDefault();
  
      if (newRoom.trim() === '') {
        return;
      }
      
      const roomID = `${newRoom}-${uuidV4()}`
  
      console.log(roomID)
      navigate(`/room/${roomID}`)
    }


    return (
        <NewRoomContainer>
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
                    
                    <h2>Criar uma nova sala</h2>

                    <form onSubmit={handleCreateRoom}>
                        <input 
                        type="text"
                        placeholder="Nome da sala"
                        onChange={event => setNewRoom(event.target.value)}
                        value={newRoom}
                        />
                        <EnterRoomButton type="submit">
                            <MdLogin size={24}/>
                            Criar Sala
                        </EnterRoomButton>
                    </form>

                    <p>
                    Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
                    </p>
                </MainContent>
            </main>
        </NewRoomContainer>
    )
}