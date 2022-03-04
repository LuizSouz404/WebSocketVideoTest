import React, { useRef, useEffect } from 'react';
import { VideoContainer } from './styles';

export const Video = (props) => {
    const ref = useRef();

    useEffect(() => {
      props.peer.on('stream', (stream) => {
        ref.current.srcObject = stream;
      });
    }, []);
  
    return (
        <VideoContainer ref={ref} autoPlay muted playsInline />
    );
  };