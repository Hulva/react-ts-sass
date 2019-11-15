import React from 'react';
import Button, { ButtonType } from '../button/Button';
import GithubLogo from '../github-logo/GithubLogo';
import { GlobalProps } from '../../TodoApp';

const Header = (props: GlobalProps) => {
    return (
        <header className="header">
            <div className="g-row">
                <div className="g-col">
                    <h1 className="header__title"></h1>
                    <ul className="header__actions">
                        {props.authenticated ? <li><Button onClick={props.signOut} type={ButtonType.BUTTON}>Sign Out</Button></li> : null}
                        <li>
                            <a href="https://github.com/r-park/todo-react-redux" className="link link--github"></a>
                            <GithubLogo />
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;