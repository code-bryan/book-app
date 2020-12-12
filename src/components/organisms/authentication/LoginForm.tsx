import Button from 'components/molecules/Button';
import FormField from 'components/molecules/FormField';
import LoginRequest from 'domain/authentication/senders/LoginRequest';
import LoginValidator from 'domain/authentication/validators/LoginValidator';
import { Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import styled from 'styled-components';

const StyledForm = styled(Form)`
    width: 100%;
`;

const ButtonContainer = styled.div`
    margin-top: 50px;
`;

const LoginForm: React.FC = () => {
    const [value] = React.useState(new LoginRequest('', ''));

    const onSubmitHandler = (values: LoginRequest) => {
        console.log(values)
    };

    return (
        <Formik initialValues={value} validationSchema={LoginValidator} onSubmit={onSubmitHandler}>
            <StyledForm>
                <FormField name="email" type="email" placeholder="Correo electrónico"  />
                <FormField name="password" type="password" placeholder="Contraseña" />
                
                <ButtonContainer>
                    <Button type="submit">Aceptar</Button>
                </ButtonContainer>
            </StyledForm>
        </Formik>
    );
};

export default LoginForm;