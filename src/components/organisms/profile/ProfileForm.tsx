import Button from 'components/molecules/Button';
import FormField from 'components/molecules/FormField';
import ProfileRequest from 'domain/authentication/senders/ProfileRequest';
import ProfileValidator from 'domain/authentication/validators/ProfileValidator';
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

const ProfileForm = () => {
    const [value] = React.useState(new ProfileRequest('', '', ''));

    const onSubmitHandler = () => {

    };

    return (
        <Formik initialValues={value} validationSchema={ProfileValidator} onSubmit={onSubmitHandler}>
            <StyledForm>
                <Section>
                    <FormField name="name" title="Nombre" border />
                    <FormField name="lastname" title="Apellido" border />
                    <FormField name="email" title="Correo eléctronico" border />
                </Section>

                <Button type="submit">Aceptar</Button>
            </StyledForm>
        </Formik>
    );
};

export default ProfileForm;