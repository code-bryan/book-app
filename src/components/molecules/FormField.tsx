import Input from 'components/atoms/Input';
import Text from 'components/atoms/Text';
import { GenericProps } from 'domain/generic-ui/GenericProps';
import { FieldConfig, useField } from 'formik';
import React from 'react';
import styled from 'styled-components';

interface IProps extends GenericProps, FieldConfig<any> {
    placeholder?: string;
    border?: boolean;
    title?: string;
}

const Field = styled.div`
    margin: 20px 0;
    width: 100%;
`;

const TextContainer = styled.div`
    margin-bottom: 5px;
`;

const FormField: React.FC<IProps> = ({ weight, color, size, placeholder, border, title, ...props }) => {
    const [field] = useField(props);
    
    return (
        <Field>
            {title && (
                <TextContainer>
                    <Text color="secondary" size={16} weight="bold">{title}</Text>
                </TextContainer>
            )}
            <Input 
                border={border}
                weight={weight} 
                color={color} 
                size={size}
                placeholder={placeholder}
                {...props}
                {...field}
            />
        </Field>
    );
};

FormField.defaultProps = {
    size: 15,
    weight: 500,
    color: 'primary',
    border: false,
};

export default FormField;