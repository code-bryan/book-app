import Button from 'components/molecules/Button';
import FormField from 'components/molecules/FormField';
import RecoverPasswordRequest from 'domain/authentication/senders/RecoverPasswordRequest';
import { Form, Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';

const StyledForm = styled(Form)`
    width: 100%;
`;

const ButtonContainer = styled.div`
    margin-top: 50px;
`;

const RecoverPasswordForm: React.FC = () => {
    const [value] = React.useState(new RecoverPasswordRequest(''));

    const onSubmitHandler = (values: RecoverPasswordRequest) => {
        console.log(values)
    };

    return (
        <Formik initialValues={value} validationSchema={RecoverPasswordRequest} onSubmit={onSubmitHandler}>
            <StyledForm>
                <FormField name="email" type="email" placeholder="Correo electrónico" />
                
                <ButtonContainer>
                    <Button type="submit">Aceptar</Button>
                </ButtonContainer>
            </StyledForm>
        </Formik>
    );
};

export default RecoverPasswordForm;