import styled from 'styled-components';

export const NewRoomContainer = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;

    aside {
        flex: 7;

        background: #1B263B;
        color: #FFF;

        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: 120px 80px;

        img {
            max-width: 320px;
        }

        strong {
            font: 700 36px 'Poppins', sans-serif;
            line-height: 42px;
            margin-top: 16px;
        }

        p {
            font-size: 24px;
            line-height: 32px;
            margin-top: 16px;
            color: #f8f8f8;
        }
    }

    main {
        flex: 8;

        padding: 0 32px;

        display: flex;
        align-items: center;
        justify-content: center;
    }  
`;

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;

    > img {
        align-self: center;
    }

    h2 {
        font-size: 24px;
        margin: 64px 0 24px;
        font-family: 'Poppins', sans-serif;
    }

    form {
        input {
            height: 50px;
            border-radius: 8px;
            padding: 0 16px;
            background: #FFF;
            border: 1px solid #415A77;
        }

        button, input {
            width: 100%;
        }
    }

    p {
        font-size: 14px;
        color: #737380;
        margin-top: 16px;

        a {
            color: #415A77;
        }
    }
`;

export const CreateRoomButton = styled.button`
    margin-top: 64px;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: #fff;
    color: #1B263B;
    border: 1px solid #415A77;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: .5rem;

    cursor: pointer;

    transition: filter 0.2s;

    img {
        margin-right: 8px;
    }

    &:hover {
        filter: brightness(0.95);
    }
`;

export const EnterRoomButton = styled.button`
    margin-top: 16px;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    font-size: .85rem;
    background: #415A77;
    color: #fff;
    border: 1px solid #3333;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: .5rem;

    cursor: pointer;

    transition: filter 0.2s;

    img {
        margin-right: 8px;
    }

    &:hover {
        filter: brightness(0.95);
    }
`;

export const Separator = styled.div`
    font-size: 14px;
    color: #1B263B;

    margin: 32px 0;
    display: flex;
    align-items: center;

    &::before {
        content: '';
        flex: 1;
        height: 1px;
        background: #778DA9;
        margin-right: 16px;
    }

    &::after {
        content: '';
        flex: 1;
        height: 1px;
        background: #778DA9;
        margin-left: 16px;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: .5rem;

    img {
        max-width: 150px;
        width: 100%;
    }

    span {
        font-size: 28px;
        font-weight: bold;
        color: #415A77;
    }
`;