import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Schema } from '@metadata/web/core/data-access'

@Component({
  selector: 'schema-form',
  template: `
    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <div class="bg-white px-6 py-4">
        <ui-form #form [model]="schema" [fields]="fields" (submitForm)="submitForm.emit($event)">
          <button
            *ngIf="form.form && fields.length"
            [disabled]="!form?.form?.valid"
            type="submit"
            class="flex mx-auto bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-50 justify-center px-12 py-2 border border-transparent shadow-sm text-lg font-medium rounded-md text-gray-300  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </ui-form>
      </div>
    </div>
  `,
})
export class SchemaFormComponent {
  @Input() schema: Schema = {}
  @Output() submitForm = new EventEmitter()
  @Input() fields = []
}
