import { GenericProps } from 'domain/generic-ui/GenericProps';
import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import Colors from 'theme/Colors';

type TypeProps = GenericProps & InputHTMLAttributes<HTMLInputElement>; 
interface IProps extends TypeProps {
    border?: boolean;
}

const StyledInput: React.FC<IProps> = styled.input`
    border-radius: 5px;
    background-color: ${Colors.WHITE};
    border-width: 0;
    height: 40px;
    width: 100%;
    font-size: ${(props:  GenericProps) => props.size}px;
    font-weight: ${(props: GenericProps) => props.weight};
    padding-left: 15px;
    outline: none;

    &.border {
        border: 2px solid ${Colors.SECONDARY};
        height: 38px;
    }

    &::placeholder {
        font-size: ${(props:  GenericProps) => props.size}px;
        font-weight: ${(props: GenericProps) => props.weight};
    }
`;

const Input: React.FC<IProps> = ({ border,...props }) => {

    return (
        <StyledInput className={border ? 'border' : ''} {...props} />
    );
}

Input.defaultProps = {
    size: 15,
    weight: 500,
    color: 'primary',
    border: false,
};

export default Input;