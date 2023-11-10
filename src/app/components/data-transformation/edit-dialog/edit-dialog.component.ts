import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild, inject} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {MatIconModule} from '@angular/material/icon';
import {AsyncPipe, NgFor} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LiveAnnouncer} from '@angular/cdk/a11y';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatChipsModule,
    NgFor,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
})
export class EditDialogComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  entityCtrl = new FormControl('');
  filteredEntities: Observable<string[]>;
  entities: string[] = ['Lemon'];
  allentities: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;

  announcer = inject(LiveAnnouncer);

  constructor() {
    this.filteredEntities = this.entityCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allentities.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.entities.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.entityCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.entities.indexOf(fruit);

    if (index >= 0) {
      this.entities.splice(index, 1);

      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.entities.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.entityCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allentities.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }
}


