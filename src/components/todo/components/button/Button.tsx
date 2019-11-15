import React from 'react';
import classNames from 'classnames';

export enum ButtonType {
    BUTTON = 'button',
    RESET = 'reset',
    SUBMIT = 'submit'
}

export interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    onClick: () => {};
    type: ButtonType;
}

const Button = (props: ButtonProps) => {
    const cssClasses = classNames('btn', props.className);
    return (
        <button className={cssClasses} onClick={props.onClick} type={props.type}>
            {props.children}
        </button>
    );
};

export default Button;