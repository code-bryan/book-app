import GenericToolbarContent from 'components/organisms/GenericToolbarContent';
import ProfileForm from 'components/organisms/profile/ProfileForm';
import FormProfileTemplate from 'components/templates/FormProfileTemplate';
import React from 'react';

const FormProfile = () => {
    return (
        <FormProfileTemplate
            toolbar={<GenericToolbarContent title="Bryan Astacio" />}
            form={<ProfileForm />}
        />
    )
};

export default FormProfile;