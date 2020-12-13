import { GenericProps } from 'domain/generic-ui/GenericProps';
import React from 'react';
import styled from 'styled-components';
import Colors from 'theme/Colors';

interface IProps extends GenericProps {
    width?: string;
}

const TextContainer: React.FC<IProps> = styled.span`
    color: ${(props: IProps) => props.color === 'primary' ? Colors.PRIMARY : Colors.SECONDARY};
    font-size: ${(props: IProps) => props.size}px;
    font-weight: ${(props: IProps) => props.weight};
    width: ${(props: IProps) => props.width};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: start;
`;

const Text: React.FC<IProps> = ({ children, ...props }) => (
    <TextContainer {...props}>
        {children}
    </TextContainer>
);

Text.defaultProps = {
    color: 'primary',
    size: 20,
    weight: 'normal',
    width: 'auto'
}

export default Text;