import { CREATE_TASK_ERROR, ITask, CREATE_TASK_SUCCESS, REMOVE_TASK_ERROR, REMOVE_TASK_SUCCESS, Task } from "./types";
import { tasks } from "./task-list";

export function createTask(title: string) {
    tasks.push(new Task({completed: false, title}));
}

export function createTaskError(error: string) {
    return {
      type: CREATE_TASK_ERROR,
      payload: error
    };
  }
  
  export function createTaskSuccess(task: ITask) {
    return {
      type: CREATE_TASK_SUCCESS,
      payload: task
    };
  }
  
  export function removeTask(task: ITask) {
    return (dispatch: (arg0: { type: string; payload: string; }) => void) => {
      taskList.remove(task.key)
        .catch((error: string) => dispatch(removeTaskError(error)));
    };
  }
  
  export function removeTaskError(error: string) {
    return {
      type: REMOVE_TASK_ERROR,
      payload: error
    };
  }
  
  export function removeTaskSuccess(task: ITask) {
    return {
      type: REMOVE_TASK_SUCCESS,
      payload: task
    };
  }