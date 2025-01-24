import {Component, inject} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatList, MatListItem} from "@angular/material/list";
import {MatFormField, MatInput, MatLabel, MatSuffix} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {ToDoListEntryComponent} from "../../components/to-do-list-entry/to-do-list-entry.component";
import {Store} from "@ngrx/store";
import { LetDirective } from '@ngrx/component';
import {toDoListActions} from "../../store/to-do-list.actions";
import {toDoListFeature} from "../../store/to-do-list.reducer";

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatList,
    MatListItem,
    MatInput,
    FormsModule,
    MatIcon,
    MatSuffix,
    MatIconButton,
    MatButton,
    MatFormField,
    MatLabel,
    ToDoListEntryComponent,
    LetDirective,
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent{
  value = '';

  private readonly store = inject(Store);

  tasks$ = this.store.select(toDoListFeature.selectTasks);

  addTaskToList() {
    this.store.dispatch(toDoListActions.addTask({task: this.value}))
  }

  constructor() {
    this.store.select(toDoListFeature.selectToDoListState).subscribe(state => console.log(state))
  }
}
