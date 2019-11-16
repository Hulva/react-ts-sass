import React, { useEffect } from "react";
import Notification from '../../components/notification/Notification';
import TaskForm from "../../components/task-form/TaskForm";
import { createSelector } from 'reselect';

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
    createTask: (title: string) => {};
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
                <TaskForm handleSubmit={props.createTask} />
            </div>

            <div className="g-col">

            </div>

            {props.notification.display ? renderNotification() : null}
        </div>
    );
};

const mapStateToProps = createSelector(
    getNotification,
    getTaskFilter,
    getVisibleTasks,
    (notification, filterType, tasks) => ({
        notification,
        filterType,
        tasks
    })
);

export default TasksPage;