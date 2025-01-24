import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListEntryComponent } from './to-do-list-entry.component';

describe('ToDoListEntryComponent', () => {
  let component: ToDoListEntryComponent;
  let fixture: ComponentFixture<ToDoListEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoListEntryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToDoListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
