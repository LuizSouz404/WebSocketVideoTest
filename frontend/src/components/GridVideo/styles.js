import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    padding: 2rem 5rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    button {
        top: 2.5rem;
        right: 2.5rem;
        position: absolute;
        background: transparent;
        color: #fff;
        border: none;
        cursor: pointer;
    }

`; 

export const VideoOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: transparent;
    transition: background 1s ease-out 1s;

    span {
        visibility: 0;
        opacity: 0;
        color: #fff;
        font-size: 18px;
        z-index: 1;
        position: absolute;
        bottom: 1rem;
        left: 1rem;
    }

    &:hover {
        background: linear-gradient(0deg, #312F2F89 5.71%, rgba(0, 0, 0, 0) 75%);
    
        span {
            visibility: 1;
            opacity: 1;
        }
    }
`;

export const VideoContainer = styled.video`
    width: 100%;
    top: 0;
    left: 0;
    max-width: 500px;
`;

export const VideoWrapper = styled.div`
    width: 100%;
    max-width: 500px;
    height: 98.6%;
    position: relative;
    border-radius: .75rem;
    overflow: hidden;
`