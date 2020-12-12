import { GenericProps } from 'domain/generic-ui/GenericProps';
import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import Colors from 'theme/Colors';
import { Search } from 'react-feather';

type IProps = GenericProps & InputHTMLAttributes<HTMLInputElement>;

const InputContainer: React.FC = styled.div`
    background-color: ${Colors.BLACK};
    border-radius: 5px;
    height: 35px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledInput: React.FC<IProps> = styled.input`
    border-width: 0;
    background: transparent;
    width: 100%;
    height: 100%;
    font-size: ${(props:  GenericProps) => props.size}px;
    font-weight: ${(props: GenericProps) => props.weight};
    outline: none;
    color: ${Colors.SECONDARY};

    &::placeholder {
        font-size: ${(props:  GenericProps) => props.size}px;
        font-weight: ${(props: GenericProps) => props.weight};
        color: ${Colors.PLACEHOLDER_SECONDARY};
    }
`;

const SearchIcon = styled(Search)`
    margin: 0 5px;
    color: ${Colors.SECONDARY};
`;

const SearchInput: React.FC<IProps> = ({ ...props }) => {
    return (
        <InputContainer>
            <SearchIcon />
            <StyledInput {...props} />
        </InputContainer>
    );
}

SearchInput.defaultProps = {
    size: 15,
    weight: 500,
    color: 'primary'
};

export default SearchInput;