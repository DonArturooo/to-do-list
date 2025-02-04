import { createActionGroup, emptyProps, props} from '@ngrx/store';
import {Task} from "../models/to-do-list.models";

export const toDoListActions = createActionGroup({
  source: 'TO DO LIST',
  events: {
    'Fetch tasks from cache': emptyProps(),
    'Fetch tasks from cache success': props<{ tasks: Task[] }>(),
    'Add task': props<{ task: string }>(),
    'Mark task completed': props<{task: Task}>(),
    'Remove task': props<{ task: string }>(),
  },
});
