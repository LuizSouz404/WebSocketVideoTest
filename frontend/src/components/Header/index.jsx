import { Container, ContainerLogo, ContainerRecording, ContainerUserImg, Content } from "./styles";
import logo from '../../assets/Logo.svg';
import { BsRecord2 } from 'react-icons/bs';

export const Header = () => {
    return (
        <Container>

            <Content>
                <ContainerLogo>
                    <img src={logo} alt="Callwala" />
                    <strong>Call dos integrantes da Cowala Tech</strong>
                </ContainerLogo>

                <ContainerLogo>
                    <ContainerRecording>
                        <BsRecord2 size={25}/>
                        <span>Recording</span>
                    </ContainerRecording>

                    <ContainerUserImg>
                        LA
                    </ContainerUserImg>
                </ContainerLogo>

            </Content>

        </Container>
    )
}