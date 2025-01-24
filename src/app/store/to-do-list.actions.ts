import { createActionGroup, emptyProps, props} from '@ngrx/store';

export const toDoListActions = createActionGroup({
  source: 'TO DO LIST',
  events: {
    'Fetch tasks': emptyProps(),
    'Fetch tasks success': props<{ tasks: string[] }>(),
    'Add task': props<{ task: string }>(),
    'Remove task': props<{ task: string }>(),
  },
});
