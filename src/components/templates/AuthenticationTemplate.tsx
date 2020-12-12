import { IonContent, IonPage } from '@ionic/react';
import Text from 'components/atoms/Text';
import LinkButton from 'components/molecules/LinkButton';
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
    top: 12%;
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
    padding: 40px 40px 0;
`;

const Footer = styled.div`
    position: absolute;
    bottom: 4%;
    width: 100%;
    padding: 0 25px 0;
`;

interface IProps {
    svg: React.ReactNode;  
    form: React.ReactNode;
    footer?: React.ReactNode;
}

const AuthenticationTemplate: React.FC<IProps> = ({ svg, form, footer }) => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <SvgContainer>
                    <Svg>
                        {svg}
                    </Svg>
                </SvgContainer>
                <Container>
                    <Text color={'secondary'} size={23} weight={600}>Login</Text>

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

export default AuthenticationTemplate;