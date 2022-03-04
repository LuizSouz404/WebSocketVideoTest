import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 4rem;
    background: #323031;
    display: flex;
    justify-content: center;
    padding: 0 2rem;
`; 

export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
`;

export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const ContainerUserImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;

    border-radius: 100%;
    background: #4E4C4C;

    font-weight: bold;
    color: #fff;
`;

export const ContainerRecording = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #C1292E;
    padding: .5rem 1rem;
    border-radius: 10px;
    gap: .25rem;
    color: #C1292E;

    span {
        font-weight: bold;
    }
`