import ProfileOption from 'components/molecules/ProfileOption';
import GenericToolbarContent from 'components/organisms/GenericToolbarContent';
import ProfileTemplate from 'components/templates/ProfileTemplate';
import React from 'react';
import { Lock, LogOut, User } from 'react-feather';

const Profile = () => {
    return (
        <ProfileTemplate
            toolbar={<GenericToolbarContent title="Bryan Astacio" />}
            options={
                <>
                    <ProfileOption icon={<User size={20} />} title="Configurar Perfil" />
                    <ProfileOption icon={<Lock size={20} />} title="Cambiar Contraseña" />
                    <ProfileOption icon={<LogOut size={20} />} title="Cerrar Sesión" />
                </>
            }
        />
    );
}

export default Profile;