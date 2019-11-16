import { MyNotification, NOTIFICATION_ACTIONS, DISMISS_NOTIFICATION } from './types';
import { CREATE_TASK_SUCCESS } from '../task/types';

const initialState = new MyNotification();

export function notificationReducer(state = initialState, action: NOTIFICATION_ACTIONS) {
    switch (action.type) {
        case CREATE_TASK_SUCCESS:
            return state.merge({
                actionLabel: 'Undo',
                display: true,
                message: 'Task deleted'
            });
        case DISMISS_NOTIFICATION:
            return new MyNotification();
        default:
            return new MyNotification();
    }
}
