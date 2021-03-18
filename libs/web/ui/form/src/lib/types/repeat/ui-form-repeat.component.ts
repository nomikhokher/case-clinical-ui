import { Component } from '@angular/core'
import { FieldArrayType } from '@ngx-formly/core'

@Component({
  template: `
    <div *ngFor="let field of field.fieldGroup; let i = index" class="flex items-center justify-between space-x-2">
      <formly-field class="flex-grow" [field]="field"></formly-field>
      <button class="mb-2 border border-gray-700 rounded-md px-4 py-2" (click)="remove(i)">
        <ui-icon icon="minusCircle"></ui-icon>
      </button>
    </div>
    <div class="flex justify-end mb-3">
      <button class="border border-gray-700 rounded-md px-4 py-2" type="button" (click)="add()">
        <span class="flex items-center space-x-3">
          <span> {{ to.addText }} </span>
          <ui-icon icon="plusCircle"></ui-icon>
        </span>
      </button>
    </div>
  `,
})
export class UiFormRepeatComponent extends FieldArrayType {
  constructor() {
    super()
  }
}
