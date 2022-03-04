import { Container } from "./styles"

export const GridVideo = ( stream, myVideo, callAccepted, callEnded, userVideo) => {
    return (
        <Container>
            
          <div className="video">
            {stream &&  <video playsInline muted ref={myVideo} autoPlay style={{ width: "300px" }} />}
          </div>

          <div className="video">
            {callAccepted && !callEnded ?
            <video playsInline ref={userVideo} autoPlay style={{ width: "300px"}} />:
            null}
          </div>
        </Container>
    )
}