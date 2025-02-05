import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListEntryComponent } from './to-do-list-entry.component';
import { Store} from "@ngrx/store";
import { Task } from '../../models/to-do-list.models';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {toDoListActions} from "../../store/to-do-list.actions";
import {MockStore, provideMockStore} from "@ngrx/store/testing";

describe('ToDoListEntryComponent', () => {
  let component: ToDoListEntryComponent;
  let fixture: ComponentFixture<ToDoListEntryComponent>;
  let store: MockStore;

  const task: Task = {name: 'Create project', completed: false};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoListEntryComponent, BrowserAnimationsModule],
      providers: [provideMockStore()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoListEntryComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;

    component.task = task;

    fixture.detectChanges();
    spyOn(component, 'markComplete').and.callThrough();
    spyOn(component, 'removeTask').and.callThrough();
    spyOn(store, 'dispatch');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should remove task', () => {
    const button:HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('mat-form-field button');
    button.click();

    expect(component.removeTask).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(toDoListActions.removeTask({task: task.name}));
  })

  it('Should mark completed', () => {
    const checkbox:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('mat-checkbox input');
    checkbox.click();

    expect(component.markComplete).toHaveBeenCalledWith(true);
    expect(store.dispatch).toHaveBeenCalledWith(toDoListActions.markTaskCompleted({task: {...task, completed: true}}));
  })
});
