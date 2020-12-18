import FormField from 'components/molecules/FormField';
import ProfileRequest from 'domain/authentication/senders/ProfileRequest';
import ProfileValidator from 'domain/authentication/validators/ProfileValidator';
import { Form, Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';

const StyledForm = styled(Form)`
    width: 100%;
`;

const Section = styled.div`

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
                </Section>

                <Section>
                    <FormField name="lastname" title="Apellido" border />
                </Section>

                <Section>
                    <FormField name="email" title="Correo eléctronico" border />
                </Section>
            </StyledForm>
        </Formik>
    );
};

export default ProfileForm;