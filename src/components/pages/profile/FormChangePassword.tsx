import GenericToolbarContent from 'components/organisms/GenericToolbarContent';
import ChangePasswordForm from 'components/organisms/profile/ChangePasswordForm';
import FormProfileTemplate from 'components/templates/FormProfileTemplate';
import React from 'react';

const FormChangePassword = () => {
    return (
        <FormProfileTemplate
            toolbar={<GenericToolbarContent title="Cambiar contraseña" />}
            form={<ChangePasswordForm />}
        />
    );
};

export default FormChangePassword;