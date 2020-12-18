import Text from 'components/atoms/Text';
import React from 'react';
import { ChevronRight } from 'react-feather';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
    margin: 15px 0;  
`;

const IconSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Icon = styled.div`
    margin-right: 5px;
    margin-top: 1px;
`;

interface IProps {
    icon: React.ReactNode;
    title: string;
    onPress?: () => void;
}

const ProfileOption: React.FC<IProps> = ({ icon, title, onPress }) => (
    <Container onClick={() => onPress?.()}>
        <IconSection>
            <Icon>{icon}</Icon>
            <Text color="secondary" size={16} weight={500}>{title}</Text>
        </IconSection>

        <ChevronRight />
    </Container>
);

export default ProfileOption;