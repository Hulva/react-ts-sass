import React, { useEffect } from "react";
import Notification from '../../components/notification/Notification';

export interface NotificationObj {
    display: boolean;
    actionLabel: string;
    duration?: number;
    message: string;
}

export interface TasksPageProps {
    tasks: [];
    location: object;
    notification: NotificationObj;
    createTask: () => {};
    dismissNotification: () => {};
    filterTasks: () => {};
    filterType: () => {};
    loadTasks: () => {};
    removeTask: () => {};
    undeleteTask: () => {};
    unloadTasks: () => {};
    updateTask: () => {};
}

const TasksPage = (props: TasksPageProps) => {
    useEffect(() => {

    });

    function renderNotification() {
        const { notification } = props;
        return (
          <Notification
            action={props.undeleteTask}
            actionLabel={notification.actionLabel}
            dismiss={props.dismissNotification}
            display={notification.display}
            message={notification.message}
          />
        );
      }
    
    return (
        <div className="g-row">
            <div className="g-col">

            </div>

            <div className="g-col">

            </div>

            {props.notification.display ? }
        </div>
    );
}

export default TasksPage;