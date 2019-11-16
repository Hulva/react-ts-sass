import { Record } from "immutable";

export const CREATE_TASK_ERROR = 'CREATE_TASK_ERROR';
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';

export const REMOVE_TASK_ERROR = 'REMOVE_TASK_ERROR';
export const REMOVE_TASK_SUCCESS = 'REMOVE_TASK_SUCCESS';

export const UNDELETE_TASK_ERROR = 'UNDELETE_TASK_ERROR';

export const UPDATE_TASK_ERROR = 'UPDATE_TASK_ERROR';
export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';

export const FILTER_TASKS = 'FILTER_TASKS';
export const LOAD_TASKS_SUCCESS = 'LOAD_TASKS_SUCCESS';
export const UNLOAD_TASKS_SUCCESS = 'UNLOAD_TASKS_SUCCESS';

export interface ITask {
    completed: boolean;
    key: string | null;
    title: string | null;
}

export const Task = Record<ITask> ({
    completed: false,
    key: null,
    title: null
});