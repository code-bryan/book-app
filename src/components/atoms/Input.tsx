import { GenericProps } from 'domain/generic-ui/GenericProps';
import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import Colors from 'theme/Colors';

type IProps = GenericProps & InputHTMLAttributes<HTMLInputElement>;

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

    &::placeholder {
        font-size: ${(props:  GenericProps) => props.size}px;
        font-weight: ${(props: GenericProps) => props.weight};
    }
`;

const Input: React.FC<IProps> = ({ ...props }) => {

    return (
        <StyledInput {...props} />
    );
}

Input.defaultProps = {
    size: 15,
    weight: 500,
    color: 'primary'
};

export default Input;