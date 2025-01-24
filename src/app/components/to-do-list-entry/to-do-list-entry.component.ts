import {Component, inject, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatIconButton} from "@angular/material/button";
import {MatFormField, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {Store} from "@ngrx/store";
import {toDoListActions} from "../../store/to-do-list.actions";

@Component({
  selector: 'app-to-do-list-entry[task]',
  standalone: true,
    imports: [
        FormsModule,
        MatFormField,
        MatIcon,
        MatIconButton,
        MatInput,
        MatSuffix
    ],
  templateUrl: './to-do-list-entry.component.html',
  styleUrl: './to-do-list-entry.component.scss'
})
export class ToDoListEntryComponent {
  @Input() task!: string

  private readonly store = inject(Store);

  removeTask():void {
    this.store.dispatch(toDoListActions.removeTask({task: this.task}));
  }
}
