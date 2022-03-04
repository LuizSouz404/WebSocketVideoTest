/* eslint-disable no-unused-expressions */
import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import Peer from 'simple-peer';
import styled from 'styled-components';
import '../App.css';
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header';
import { Container } from '../components/GridVideo/styles';
//import { Video } from '../components/Video';

const StyledVideo = styled.video`
	height: 300px;
	width: 450px;
	@media (max-width: 450px) {
		height: 150px;
		width: 150px;
	}
`;

const Video = ({peer}) => {
	const ref = useRef();
	console.log(peer);

	useEffect(() => {
		peer.on('stream', (stream) => {
			ref.current.srcObject = stream;
		});
	}, [peer]);

	return <StyledVideo playsInline autoPlay ref={ref} />;
};

const RoomVideoCall = (props) => {	
	const {roomID: id} = useParams();
	const roomIdIndex = id.indexOf('-')

	const [peers, setPeers] = useState([]);
	const [audio, setAudio] = useState(false);
	const [video, setVideo] = useState(true);
	const socketRef = useRef();
	const userVideo = useRef();
	const peersRef = useRef([]);
	console.log(id.slice(roomIdIndex,))
	const roomID = id.slice(roomIdIndex+1,);

	useEffect(() => {
		socketRef.current = io.connect('/');
		navigator.mediaDevices.getUserMedia({ video: video, audio: audio }).then((stream) => {
			userVideo.current.srcObject = stream;
			socketRef.current.emit('join room', roomID);
			socketRef.current.on('all users', (users) => {
				const peers = [];
				users.forEach((userID) => {
					const peer = createPeer(userID, socketRef.current.id, stream);
					peersRef.current.push({
						peerID: userID,
						peer,
					});
					peers.push(peer);
				});
				setPeers(peers);
			});

			socketRef.current.on('user joined', (payload) => {
				const peer = addPeer(payload.signal, payload.callerID, stream);
				peersRef.current.push({
					peerID: payload.callerID,
					peer,
				});

				setPeers((users) => [...users, peer]);
			});

			socketRef.current.on('receiving returned signal', (payload) => {
				const item = peersRef.current.find((p) => p.peerID === payload.id);
				item.peer.signal(payload.signal);
			});
		});
	}, [audio, roomID, video]);

	function createPeer(userToSignal, callerID, stream) {
		const peer = new Peer({
			initiator: true,
			trickle: false,
			stream,
		});

		peer.on('signal', (signal) => {
			socketRef.current.emit('sending signal', { userToSignal, callerID, signal });
		});

		return peer;
	}

	function addPeer(incomingSignal, callerID, stream) {
		const peer = new Peer({
			initiator: false,
			trickle: false,
			stream,
		});

		peer.on('signal', (signal) => {
			socketRef.current.emit('returning signal', { signal, callerID });
		});

		peer.signal(incomingSignal);

		return peer;
	}

	return (
		<div className="App">
			<Header />

		<Container>
			{/*
			<button>
				<BiArrowFromRight size={24}/>
			</button>*/
			}

			<StyledVideo ref={userVideo} autoPlay playsInline />
				{peers.map((peer, index) => {
					return (
						<div>
							<Video key={index} peer={peer} />
						</div>
					);
				})}
			
		</Container>

		<button onClick={() => setAudio(!audio)}>Microfone</button>
		<button onClick={() => setVideo(!video)}>Video</button>

		</div>
	);
}

export default RoomVideoCall;