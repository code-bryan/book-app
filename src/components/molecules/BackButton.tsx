import React from 'react';
import styled from 'styled-components';
import { ChevronLeft } from 'react-feather';
import Colors from 'theme/Colors';
import Text from 'components/atoms/Text';
import { IonRouterLink } from '@ionic/react';

interface IProps {
    link: string
}

const ButtonContainer = styled(IonRouterLink)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BackButton: React.FC<IProps> = ({ link }) => {
    return (
        <ButtonContainer routerLink="link">
            <ChevronLeft color={Colors.SECONDARY} />
            <Text color="secondary">back</Text>
        </ButtonContainer>
    );
};

export default BackButton;