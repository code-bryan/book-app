import Button from 'components/molecules/Button';
import FormField from 'components/molecules/FormField';
import ChangePasswordRequest from 'domain/authentication/senders/ChangePasswordRequest';
import ChangePasswordValidators from 'domain/authentication/validators/ChangePasswordValidators';
import { Form, Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';

const StyledForm = styled(Form)`
    width: 100%;
    height: 69vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Section = styled.div`
    width: 100%;
`;

const ChangePasswordForm = () => {
    const [value] = React.useState(new ChangePasswordRequest('', '', ''));

    const onSubmitHandler = () => {

    };

    return (
        <Formik initialValues={value} validationSchema={ChangePasswordValidators} onSubmit={onSubmitHandler}>
            <StyledForm>
                <Section>
                    <FormField name="old_password" title="Contaseña actual" border />
                    <FormField name="password" title="Contraseña nueva" border />
                    <FormField name="confirmation_password" title="Repita la contraseña" border />
                </Section>

                <Button type="submit">Aceptar</Button>
            </StyledForm>
        </Formik>
    );
};

export default ChangePasswordForm;