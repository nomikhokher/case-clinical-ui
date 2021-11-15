import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FormControl } from '@angular/forms'
import { FieldType } from '@ngx-formly/core'

@Component({
  template: `
    <div class="mt-4" [ngClass]="to.align == 'inline' ? 'flex space-x-4' : 'space-y-8'">
      <ng-container *ngFor="let option of to.options | formlySelectOptions: field | async; let i = index">
        <div class="flex items-center h-5">
          <input
            type="radio"
            class="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300  dark:bg-gray-800 dark:border-gray-600"
            [id]="id + '_' + i"
            [name]="field.name || id"
            [class.is-invalid]="showError"
            [attr.value]="option.value"
            [value]="option.value"
            [formControl]="formControl"
            [formlyAttributes]="field"
            [attr.disabled]="option.disabled || formControl.disabled ? true : null"
          />
          <div class="ml-3 text-sm">
            <label
              [ngClass]="{ 'text-indigo-200': formControl.disabled == true }"
              [for]="id + '_' + i"
              class="font-medium text-gray-700"
              >{{ option.label?.name || option.label }}</label
            >
            <h1
              [ngClass]="{ 'text-indigo-200': formControl.disabled == true }"
              [for]="id + '_' + i"
              class="text-gray-500"
            >
              {{ option.label?.detail }}
            </h1>
          </div>
        </div>
      </ng-container>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiFormRadioComponent extends FieldType {
  formControl!: FormControl
  defaultOptions = {
    templateOptions: {
      options: [],
    },
  }
}
