import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonAlert, IonApp, IonContent, IonLoading, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, isPlatform } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {Home as HomeIcon, Search as SearchIcon, Bookmark, Settings as SettingIcons} from 'react-feather';
import { Provider, useDispatch } from 'react-redux';
import store from 'domain/application/Store';

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
import Search from './pages/search/Search';
import Book from './pages/Book';

import Player from './pages/Player';
import Collection from './pages/Collection';
import Library from './pages/library/Library';
import MyBooks from './pages/library/MyBooks';
import MyDiscover from './pages/library/MyDiscover';
import Profile from './pages/profile/Profile';
import FormProfile from './pages/profile/FormProfile';
import User from 'domain/authentication/entities/User';

const STYLES = { width: isPlatform('ios') ? '48px' : '50px' };

const App: React.FC<any> = ({ ...props }) => {
  const [user, setUser] = React.useState<User|undefined>(undefined);
  

  React.useEffect(() => {
    store.subscribe(() => {
      const { authenticationState } = store.getState();
      setUser(authenticationState.user);
    });
  }, []);


  return (
    <Provider store={store}>
        <IonApp>
          <IonContent>
            <Player />
            
            <IonReactRouter>
              <IonTabs>
                  <IonRouterOutlet>
                    {/* home routes */}
                    <Route path="/home" component={Home} exact={true} />
                    <Route path="/new-books" component={NewBookList} exact={true} />
                    <Route path='/discover' component={Discover} exact={true} />
                    <Route path="/home/book/:id" component={Book} exact={true} />
                    <Route path="/home/collection/:id" component={Collection} exact={true} />

                    {/* home routes */}
                    <Route path="/library" component={Library} exact={true} />
                    <Route path="/my-books" component={MyBooks} exact={true} />
                    <Route path='/my-discover' component={MyDiscover} exact={true} />
                    <Route path="/library/book/:id" component={Book} exact={true} />
                    <Route path="/library/collection/:id" component={Collection} exact={true} />

                    {/* profile routes */}
                    <Route path="/profile" component={Profile} exact={true} />
                    <Route path="/profile/configuration" component={FormProfile} exact={true} />

                    {/* search routes */}
                    <Route path="/search" component={Search} exact={true} />
    
                    {/* authentication routes */}
                    <Route path="/login" component={Login} exact={true} />
                    <Route path="/register" component={Register} exact={true} />
                    <Route path="/recover-password" component={RecoverPassword} exact={true} />
    
                    {/* default */}
                    <Route exact path="/" render={() => <Redirect to="/login" />} />
                  </IonRouterOutlet>

                  <IonTabBar slot="bottom" style={{ display: user ? 'flex' : 'none', height:  '56px' }}>
                      <IonTabButton tab="home" href="/home">
                        <div className="icon-selected" style={STYLES}>
                          <HomeIcon />
                        </div>
                      </IonTabButton>
    
                      <IonTabButton tab="search" href="/search">
                        <div className="icon-selected" style={STYLES}>
                          <SearchIcon />
                        </div>
                      </IonTabButton>
    
                      <IonTabButton tab="library" href="/library">
                        <div className="icon-selected" style={STYLES}>
                          <Bookmark  />
                        </div> 
                      </IonTabButton>
    
                      <IonTabButton tab="profile" href="/profile">
                        <div className="icon-selected" style={STYLES}>
                          <SettingIcons  />
                        </div>
                      </IonTabButton>
                  </IonTabBar>
              </IonTabs>
            </IonReactRouter>
          </IonContent>
      </IonApp>
    </Provider>
  );
};

export default App;
