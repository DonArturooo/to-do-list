import {ActionReducer, createFeature, createReducer, on} from '@ngrx/store';
import { toDoListActions } from './to-do-list.actions';
import { Task } from '../models/to-do-list.models';

export type ToDoListState = { tasks: Task[] }

export const initialState: ToDoListState = {
  tasks: [],
};

export const toDoListReducer: ActionReducer<ToDoListState> = createReducer(
  initialState,
  on(toDoListActions.fetchTasksFromCacheSuccess, (state, {tasks}) => ({
    ...state,
    tasks: tasks,
  })),
  on(toDoListActions.addTask,
    (state, {task}) =>
    {
      if(state.tasks.find((taskOnList) => taskOnList.name === task)) {
        return state;
      }
      return {...state, tasks: [...state.tasks, {name: task, completed: false}]};
    }),
  on(toDoListActions.markTaskCompleted,
    (state, {task}) =>
    {
      const tasks = state.tasks.map((taskOnList) => taskOnList.name === task.name ? task : taskOnList);

      return {...state, tasks};
    }),
  on(toDoListActions.removeTask,
    (state, {task}) => {
      const removedTasks = state.tasks.filter(taskOnList => taskOnList.name !== task);

      return {...state, tasks: removedTasks}
    })
);


export const toDoListFeature = createFeature({
  name: 'toDoList',
  reducer: toDoListReducer,
});
