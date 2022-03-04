export const getUserFullMedia = () => {
    if ( this.userMediaAvailable() ) {
        return navigator.mediaDevices.getUserMedia( {
            video: true,
            audio: {
                echoCancellation: true,
                noiseSuppression: true
            }
        } );
    }

    else {
        throw new Error( 'User media not available' );
    }
}