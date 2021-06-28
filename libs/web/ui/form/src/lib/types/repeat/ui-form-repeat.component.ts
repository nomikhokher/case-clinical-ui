import { Component, OnInit } from '@angular/core'
import { FieldArrayType, FormlyField, FormlyFieldConfig } from '@ngx-formly/core'

@Component({
  template: `
    <div
      *ngFor="let field of decorateFieldGroup(field.fieldGroup); let i = index"
      class="flex flex-col border-gray-200 py-6"
      [class.border-b]="field.fieldGroup?.length > 1"
    >
      <div class="flex items-center justify-end">
        <button
          class="rounded-md px-0 py-1 space-x-1 flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-red-500 transition duration-100 ease-in-out"
          (click)="remove(i)"
        >
          <ui-icon class="h-4 w-4" icon="trash"></ui-icon>
          <span>Remove</span>
        </button>
      </div>
      <div>
        <formly-field class="flex-grow" [field]="field"></formly-field>
      </div>
    </div>
    <div class="flex mb-3 w-full">
      <button
        class="bg-blue-500 bg-opacity-20 hover:bg-opacity-50 transition duration-100 ease-linear w-full flex items-center space-x-1 justify-center dark:text-blue-200 text-blue-700 rounded-md px-4 py-2"
        type="button"
        (click)="add()"
      >
        <ui-icon class="h-4 w-4" icon="plusCircle"></ui-icon>
        <span>{{ to.addText }}</span>
      </button>
    </div>
  `,
})
export class UiFormRepeatComponent extends FieldArrayType implements OnInit {
  constructor() {
    super()
  }

  decorateFieldGroup(fieldGroup) {
    return fieldGroup.map((group) => ({
      ...group,
      fieldGroupClassName: 'grid grid-cols-1 sm:grid-cols-6',
    }))
  }

  ngOnInit() {
    if (this.formControl.value?.length <= 0) {
      this.add()
    }
  }
}
