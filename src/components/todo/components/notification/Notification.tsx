import React, { useEffect } from 'react';
import { ButtonType } from '../button/Button';

export interface NotificationProps {
    actionLabel: string;
    display: boolean;
    duration?: number;
    message: string;
    action: () => {};
    dismiss: () => {};
}

const Notification = (props: NotificationProps) => {
    let notificationMessageRef: HTMLParagraphElement | null;
    let notificationButtonRef: HTMLButtonElement | null;
    let timerId: NodeJS.Timeout;

    function clearTimer() {
        if (timerId) {
            clearTimeout(timerId);
        }
    }

    function startTimer() {
        clearTimer();
        timerId = setTimeout(() => {
            props.dismiss();
        }, props.duration || 5000);
    }

    useEffect(() => {
        if (props.display) {
            startTimer();
        }
        return function cleanup() {
            clearTimer();
        };
    }, [props.display]);

    return (
        <div className="notification">
            <p className="notification__message" ref={c => notificationMessageRef = c}>{props.message}</p>
            <button
                className="btn notification__button"
                onClick={props.action}
                ref={c => notificationButtonRef = c}
                type={ButtonType.BUTTON}
                >{props.actionLabel}</button>
        </div>
    );
}

export default Notification;