import {ActionReducer, createFeature, createReducer, on} from '@ngrx/store';
import { toDoListActions } from './to-do-list.actions';

export type ToDoListState = { tasks: string[] }

export const initialState: ToDoListState = {
  tasks: ['Utworzyć projekt'],
};

export const toDoListReducer: ActionReducer<ToDoListState> = createReducer(
  initialState,
  on(toDoListActions.fetchTasksSuccess, (state, {tasks}) => ({
    ...state,
    tasks: tasks,
  })),
  on(toDoListActions.addTask,
    (state, {task}) =>
    {
      if(state.tasks.includes(task)) {
        return state;
      }
      return {...state, tasks: [...state.tasks, task]}
    }),
  on(toDoListActions.removeTask,
    (state, {task}) => {
      const removedTasks = state.tasks.filter(taskOnList => taskOnList !== task);

      console.log(removedTasks);

      return {...state, tasks: removedTasks}
    })
);


export const toDoListFeature = createFeature({
  name: 'toDoList',
  reducer: toDoListReducer,
});
