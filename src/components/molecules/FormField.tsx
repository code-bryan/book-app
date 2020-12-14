import Input from 'components/atoms/Input';
import { GenericProps } from 'domain/generic-ui/GenericProps';
import { FieldConfig, useField } from 'formik';
import React from 'react';
import styled from 'styled-components';

interface IProps extends GenericProps, FieldConfig<any> {
    placeholder?: string;
}

const Field = styled.div`
    margin: 20px 0;
    width: 100%;
`;

const FormField: React.FC<IProps> = ({ weight, color, size, placeholder, ...props }) => {
    const [field] = useField(props);
    
    return (
        <Field>
            <Input 
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
    color: 'primary'
};

export default FormField;