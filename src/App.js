import React, { useReducer } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import './App.css';
import RegistrationPage from './pages/registration';
import Home from './pages/welcome';
import NavBar from './components/compounds/navbar';
import Footer from './components/compounds/footer';
import { PrivateRoute, PublicRoute } from './utils/router_auth';
import { AuthProvider } from './context';

function App() {
    // simulate private route access
    const initialState = { hasRegistered: false, user: '' };

    function reducer(state, action) {
        switch (action.type) {
            case 'AUTH_USER':
                return { ...state, hasRegistered: true, user: action.payload };
            default:
                throw new Error();
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className={'Main-template'}>
            <AuthProvider value={{ state, dispatch }}>
                <NavBar />
                <Switch>
                    <PublicRoute
                        authenticated={state.hasRegistered}
                        component={RegistrationPage}
                        path={'/register'}
                        ifAuth={'/home'}
                    />
                    <PrivateRoute
                        exact
                        authenticated={state.hasRegistered}
                        component={Home}
                        path={'/home'}
                        notAuth={'/register'}
                    />
                    <Redirect from={'/'} to={'/home'} />
                </Switch>
                <Footer />
            </AuthProvider>
        </div>
    );
}

export default App;
