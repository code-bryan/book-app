import Button from 'components/molecules/Button';
import FormField from 'components/molecules/FormField';
import LoginRequest from 'domain/authentication/senders/LoginRequest';
import RegisterRequest from 'domain/authentication/senders/RegisterRequest';
import RegisterValidator from 'domain/authentication/validators/RegisterValidator';
import { Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import styled from 'styled-components';

const StyledForm = styled(Form)`
    width: 100%;
`;

const ButtonContainer = styled.div`
    margin-top: 40px;
`;

const RegisterForm: React.FC = () => {
    const [value] = React.useState(new RegisterRequest('', '', '', ''));

    const onSubmitHandler = (values: RegisterRequest) => {
        console.log(values)
    };

    return (
        <Formik initialValues={value} validationSchema={RegisterValidator} onSubmit={onSubmitHandler}>
            <StyledForm>
                <FormField name="name" placeholder="Nombre"  />
                <FormField name="lastname" type="email" placeholder="Apellido"  />
                <FormField name="email" type="email" placeholder="Correo electrónico"  />
                <FormField name="password" type="password" placeholder="Contraseña" />
                
                <ButtonContainer>
                    <Button type="submit">Aceptar</Button>
                </ButtonContainer>
            </StyledForm>
        </Formik>
    );
};

export default RegisterForm;