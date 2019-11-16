import React from 'react';
import Header from './components/header/Header';
import RequireAuthRoute from './components/require-auth-route/RequireAuthRoute';
import TasksPage from './pages/tasks/TasksPage';

export interface GlobalProps {
    authenticated: boolean;
    signOut: () => {}
}

const TodoApp = (props: GlobalProps) => {
    <div>
        <Header {...props} />

        <main>
            <RequireAuthRoute authenticated={props.authenticated} exact path="/todo" component={TasksPage} />
        </main>
    </div>
}