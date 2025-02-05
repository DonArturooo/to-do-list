import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListComponent } from './to-do-list.component';
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Store} from "@ngrx/store";
import {toDoListActions} from "../../store/to-do-list.actions";

describe('ToDoListComponent', () => {
  let component: ToDoListComponent;
  let fixture: ComponentFixture<ToDoListComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoListComponent, BrowserAnimationsModule],
      providers: [provideMockStore()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;

    component.value = 'test';

    fixture.detectChanges();
    spyOn(component, 'addTaskToList').and.callThrough();
    spyOn(store, 'dispatch');
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(toDoListActions.fetchTasksFromCache());
  });

  it('should add task', () => {
    const button:HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('mat-card-content>button');
    button.click();

    expect(component.addTaskToList).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(toDoListActions.addTask({task: 'test'}));
  });
});
