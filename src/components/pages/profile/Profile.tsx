import ProfileOption from 'components/molecules/ProfileOption';
import GenericToolbarContent from 'components/organisms/GenericToolbarContent';
import ProfileTemplate from 'components/templates/ProfileTemplate';
import React from 'react';
import { Lock, LogOut, User } from 'react-feather';
import { RouteComponentProps, StaticContext } from 'react-router';

const Profile : React.FC<RouteComponentProps<any, StaticContext, unknown>> = ({ history }) => {
    const onProfilePressHandler = () => {
        history.push('/profile/configuration');
    };

    const onPasswordPressHandler = () => {
        history.push('/profile/configuration');
    };

    const onLogOutPressHandler = () => {
        history.push('/logout');
    }

    return (
        <ProfileTemplate
            toolbar={<GenericToolbarContent title="Bryan Astacio" />}
            options={
                <>
                    <ProfileOption icon={<User size={20} />} title="Configurar Perfil" onPress={onProfilePressHandler} />
                    <ProfileOption icon={<Lock size={20} />} title="Cambiar Contraseña" onPress={onPasswordPressHandler} />
                    <ProfileOption icon={<LogOut size={20} />} title="Cerrar Sesión" onPress={onLogOutPressHandler} />
                </>
            }
        />
    );
}

export default Profile;