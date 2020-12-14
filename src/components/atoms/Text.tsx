import { GenericProps } from 'domain/generic-ui/GenericProps';
import React from 'react';
import styled from 'styled-components';
import Colors from 'theme/Colors';

interface IProps extends GenericProps {
    width?: string;
    whiteSpace?: "none" | "nowrap";
    align?: "start" | "center";
}

const TextContainer: React.FC<IProps> = styled.span`
    color: ${(props: IProps) => props.color === 'primary' ? Colors.PRIMARY : Colors.SECONDARY};
    font-size: ${(props: IProps) => props.size}px;
    font-weight: ${(props: IProps) => props.weight};
    width: ${(props: IProps) => props.width};
    text-overflow: ellipsis;
    white-space: ${(props: IProps) => props.whiteSpace};
    overflow: hidden;
    text-align: ${(props: IProps) => props.align};
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
    width: 'auto',
    whiteSpace: 'nowrap',
    align: 'start',
}

export default Text;