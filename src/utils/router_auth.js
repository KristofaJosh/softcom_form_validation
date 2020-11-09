import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, authenticated, notAuth, ...routerProps }) => {

    return (
        <Route
            {...routerProps}
            render={(props) =>
                authenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: notAuth, state: { from: props.location } }} />
                )
            }
        />
    );
};

export const PublicRoute = ({ component: Component, authenticated, ifAuth, ...routerProps }) => {

    return (
        <Route
            {...routerProps}
            render={(props) =>
                !authenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: ifAuth,
                            state: { from: props.location },
                        }}
                        exact
                    />
                )
            }
        />
    );
};