import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import '../theme/variables.css';

import Home from './pages/home/Home';
import NewBookList from './pages/home/NewBookList';
import Discover from './pages/home/Discover';
import Register from './pages/authentication/Register';
import RecoverPassword from './pages/authentication/RecoverPassword';
import Login from './pages/authentication/Login';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* home routes */}
        <Route path="/home" component={Home} exact={true} />
        <Route path="/new-books" component={NewBookList} exact={true} />
        <Route path='/discover' component={Discover} exact={true} />
        

        {/* authentication routes */}
        <Route path="/login" component={Login} exact={true} />
        <Route path="/register" component={Register} exact={true} />
        <Route path="/recover-password" component={RecoverPassword} exact={true} />

        {/* default */}
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
