import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import {toDoListReducer} from "./store/to-do-list.reducer";
import { provideEffects } from '@ngrx/effects';
import * as toDoListEffects from './store/to-do-list.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideStore(), provideStore({ toDoList: toDoListReducer }), provideEffects(toDoListEffects),]
};
