import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

export interface RequireAuthRouteProps {
    component: React.ReactNode;
    authenticated: boolean;
    exact: boolean;
    path: string;
}

const RequireAuthRoute = (props: RequireAuthRouteProps) => {
    return (
        <Route exact={props.exact} path={props.path}>
            {props.authenticated ? (
                    props.component
                ) : (
                    <Redirect to={{
                        pathname: '/sign-in',
                        state: { from: useLocation() }
                    }} />
                )}
        </Route>
    );
};

export default RequireAuthRoute;