import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export interface RequireAuthRouteProps {
    component: React.ComponentClass;
    authenticated: boolean;
    rest?: {};
}

const RequireAuthRoute = (props: RequireAuthRouteProps) => {
    return (
        <Route
            {...props.rest}
            render={props1 => {
                return props.authenticated ? (
                    <props.component {...props1} />
                ) : (
                    <Redirect to={{
                        pathname: '/sign-in',
                        state: { from: props1.location }
                    }} />
                )
            }}
        />
    );
};

export default RequireAuthRoute;