import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import Text from 'components/atoms/Text';
import { IonButton, IonSlide } from '@ionic/react';

interface IProps {
    marginRight?: number;
}

const Container: React.FC<HTMLAttributes<HTMLIonSlideElement> & IProps> = styled(IonSlide)`
    width: 130px;
    height: 60px;
    margin-right: ${(props: IProps) => props.marginRight}px;
`;

const Button = styled(IonButton)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    letter-spacing: normal;
    text-transform: none;
    --background: #6761AA;
    --border-radius: 5px;
    --box-shadow: none;
`;

const CategoryCard: React.FC<IProps> = ({children, ...props}) => {
    return (
        <Container {...props}>
            <Button>
                <Text color="secondary" size={15} weight={500}>{children}</Text>
            </Button>
        </Container>
    )
};

CategoryCard.defaultProps = {
    marginRight: 0
};

export default CategoryCard;