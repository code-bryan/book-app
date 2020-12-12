import React from 'react';
import styled from 'styled-components';
import Colors from 'theme/Colors';

interface IProps {
    color?: 'primary' | 'secondary',
    size?: number;
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'normal' | 'bold' | 'lighter' | 'bolder';
}

const TextContainer: React.FC<IProps> = styled.span`
    color: ${(props: IProps) => props.color === 'primary' ? Colors.PRIMARY : Colors.SECONDARY};
    font-size: ${(props: IProps) => props.size}px;
    font-weight: ${(props: IProps) => props.weight};
`;

const Text: React.FC<IProps> = ({ children, ...props }) => (
    <TextContainer {...props}>
        {children}
    </TextContainer>
);

Text.defaultProps = {
    color: 'primary',
    size: 20,
    weight: 'normal'
}

export default Text;