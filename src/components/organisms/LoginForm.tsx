import Button from 'components/molecules/Button';
import FormField from 'components/molecules/FormField';
import { Form, Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';

const StyledForm = styled(Form)`
    width: 100%;
`;

const ButtonContainer = styled.div`
    margin-top: 50px;
`;

const LoginForm: React.FC = () => {
    const onSubmitHandler = () => {
        console.log("Hola");
    };

    return (
        <Formik initialValues={{}} onSubmit={onSubmitHandler}>
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