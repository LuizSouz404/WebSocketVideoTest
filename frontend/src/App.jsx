import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import RoomVideoCall from './pages/RoomVideoCall';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/room/new" element={<NewRoom />} />
				<Route path="room" element={<RoomVideoCall />} />

				<Route path="/room/:roomID" element={<RoomVideoCall />}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
