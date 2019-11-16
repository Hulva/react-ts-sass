import { Record } from 'immutable';
import { CREATE_TASK_SUCCESS, ITask } from '../task/types';

export const DISMISS_NOTIFICATION = 'DISMISS_NOTIFICATION';

export interface IMyNotification {
    actionLabel: string;
    display: boolean;
    message: string;
}

export const MyNotification = Record<IMyNotification> ({
    actionLabel: '',
    display: false,
    message: ''
});

export interface DismissNotificationAction {
    type: typeof DISMISS_NOTIFICATION
}

export interface RemoveTaskSuccessNotificationAction {
    type: typeof CREATE_TASK_SUCCESS,
    payload: Record<ITask>
}

export type NOTIFICATION_ACTIONS = DismissNotificationAction | RemoveTaskSuccessNotificationAction;
