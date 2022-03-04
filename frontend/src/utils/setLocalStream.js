export const setLocalStream = ( stream, mirrorMode = true, videoRef ) => {
    const localVidElem = videoRef;

    localVidElem.srcObject = stream;
    mirrorMode ? localVidElem.classList.add( 'mirror-mode' ) : localVidElem.classList.remove( 'mirror-mode' );
}