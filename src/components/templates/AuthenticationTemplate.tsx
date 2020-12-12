import { IonButtons, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';
import Colors from 'theme/Colors';

const Toolbar = styled(IonToolbar)`
    --background: transparent;
    --border-color: transparent;
    --border-style: none;
    --box-shadow: none;
`;

const Title: React.FC<{  top: number }> = styled.div`
    margin-top: ${(props: {  top: number }) => props.top}px;
`;

const SvgContainer = styled.div`
    width: 100%;
    height: 35%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const Svg = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    background-color: ${Colors.PRIMARY};
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 65%;
    padding: 20px 40px 0;
`;

const Footer = styled.div`
    position: absolute;
    bottom: 4%;
    width: 100%;
    padding: 0 25px 0;
`;

const BackButtonContainer = styled(IonButtons)`
 
`;

interface IProps {
    title: React.ReactNode;
    backButton?:  React.ReactNode;
    titleTop?: number;
    svg: React.ReactNode;  
    form: React.ReactNode;
    footer?: React.ReactNode;
}

const AuthenticationTemplate: React.FC<IProps> = ({ title, backButton, titleTop, svg, form, footer }) => {
    return (
        <IonPage>
            {backButton && (
                <IonHeader>
                    <Toolbar>
                        <BackButtonContainer slot="start">{backButton}</BackButtonContainer>
                    </Toolbar>
                </IonHeader>
            )}
            <IonContent fullscreen>
                <SvgContainer>
                    <Svg>
                        {svg}
                    </Svg>
                </SvgContainer>
                <Container>
                    <Title top={titleTop ? titleTop : 40}>
                        {title}
                    </Title>

                    {form}
                </Container>

                {footer && (
                    <Footer>
                        {footer}
                    </Footer>
                )}
            </IonContent>
        </IonPage>
    );
};

AuthenticationTemplate.defaultProps = {
    titleTop: 40    
}

export default AuthenticationTemplate;