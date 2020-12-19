import { IonSpinner } from '@ionic/react';
import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface IProps {
    size?: number;
    name?: string;
}

const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Spinner: React.FC<IProps & HTMLAttributes<HTMLIonSpinnerElement>> = styled(IonSpinner)`
    width: ${(props: IProps) => props.size}px;
    height: ${(props: IProps) => props.size}px;
`;

const Loading: React.FC<IProps> = ({ ...props }) => {
    return (
        <Container>
            <Spinner {...props} />
        </Container>
    )
}

Loading.defaultProps = {
    size: 60,
    name: "crescent"
}

export default Loading;