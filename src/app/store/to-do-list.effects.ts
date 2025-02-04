import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {Store} from "@ngrx/store";
import {map, tap, withLatestFrom} from "rxjs";
import {toDoListActions} from "./to-do-list.actions";
import {toDoListFeature} from "./to-do-list.reducer";

export const fetchTasksFromCache$ = createEffect(
  (
    actions$ = inject(Actions),
  ) =>
    actions$.pipe(
      ofType(toDoListActions.fetchTasksFromCache),
      map(() => {
        const savedTasks = localStorage.getItem('tasks');
        return toDoListActions.fetchTasksFromCacheSuccess({tasks: savedTasks ? JSON.parse(savedTasks) : []})
      })
    ),
  { functional: true, dispatch: true }
);

export const saveTasksInCache$ = createEffect(
  (
    actions$ = inject(Actions),
    store = inject(Store)
  ) =>
    actions$.pipe(
      ofType(toDoListActions.addTask, toDoListActions.markTaskCompleted, toDoListActions.removeTask),
      withLatestFrom(store.select(toDoListFeature.selectTasks)),
      tap(([_, tasks]) => {
        localStorage.setItem('tasks', JSON.stringify(tasks)) })
    ),
  { dispatch: false, functional: true }
);
