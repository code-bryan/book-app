import { IonContent, IonPage } from '@ionic/react';
import Text from 'components/atoms/Text';
import React from 'react';
import styled from 'styled-components';
import Colors from 'theme/Colors';

const SvgContainer = styled.div`
    width: 100%;
    height: 35%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const Svg = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    top: 12%;
`;

const Container = styled.div`
    background-color: ${Colors.PRIMARY};
    width: 100%;
    height: 65%;
    padding: 40px 40px 0;
`;

interface IProps {
    svg: React.ReactNode;    
}

const AuthenticationTemplate: React.FC<IProps> = ({ svg }) => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <SvgContainer>
                    <Svg>
                        {svg}
                    </Svg>
                </SvgContainer>
                <Container>
                    <Text color={'secondary'} size={25} weight={500}>Login</Text>
                </Container>
            </IonContent>
        </IonPage>
    );
};

export default AuthenticationTemplate;