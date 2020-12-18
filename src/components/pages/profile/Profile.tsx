import { IonLoading } from '@ionic/react';
import ProfileOption from 'components/molecules/ProfileOption';
import GenericToolbarContent from 'components/organisms/GenericToolbarContent';
import ProfileTemplate from 'components/templates/ProfileTemplate';
import { IApplicationStore } from 'domain/application/Store';
import { logout } from 'domain/authentication/AuthenticationState';
import React from 'react';
import { Lock, LogOut, User } from 'react-feather';
import { connect } from 'react-redux';
import { RouteComponentProps, StaticContext } from 'react-router';
import { Dispatch } from 'redux';

interface IProps extends RouteComponentProps<any, StaticContext, unknown> {
    loadingLogout: boolean;
    failLogout: boolean;
    logout: () => void
}

const Profile : React.FC<IProps> = ({ history, loadingLogout, failLogout, logout }) => {
    const onProfilePressHandler = () => {
        history.push('/profile/configuration');
    };

    const onPasswordPressHandler = () => {
        history.push('/profile/configuration');
    };

    const onLogOutPressHandler = () => {
        logout();

        if (!failLogout) {
            history.push('/login');
        }
    }

    return (
        <>
            <IonLoading isOpen={loadingLogout} message="Porfavor espere..." translucent  backdropDismiss={false} />
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
        </>
    );
}

const mapStateToProps = (state: IApplicationStore) => ({
    loadingLogout: state.authenticationState.loadingLogout,
    failLogout: state.authenticationState.failLogout,
})

const mapToPropsFromRedux = (dispatch: Dispatch) => ({
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapToPropsFromRedux)(Profile);