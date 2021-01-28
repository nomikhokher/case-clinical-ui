import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Schema } from '@schema-driven/web/core/data-access'

@Component({
  selector: 'schema-form',
  template: `
    <div class="shadow overflow-hidden sm:rounded-lg">
      <div class="bg-gray-50 dark:bg-gray-800 px-6 py-4">
        <ui-form #form [model]="schema" [fields]="fields" (submitForm)="submitForm.emit($event)">
          <div class="text-right">
            <ui-button [disabled]="!form?.form?.valid" type="submit" label="Save"> </ui-button>
          </div>
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
