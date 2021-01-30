import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Schema } from '@schema-driven/web/core/data-access'
import { WebUiFormField } from '@schema-driven/web/ui/form'

@Component({
  selector: 'entity-form',
  template: `
    <div class="p-4">
      <ui-form #form [model]="schema" [fields]="fields" (submitForm)="submitForm.emit($event)">
        <div class="flex space-x-2 justify-end">
          <ng-content></ng-content>
          <ui-button [disabled]="!form?.form?.valid" type="submit" label="Save"> </ui-button>
        </div>
      </ui-form>
    </div>
  `,
})
export class EntityFormComponent {
  @Input() schema: Schema = {}
  @Output() submitForm = new EventEmitter()
  @Input() fields = [
    WebUiFormField.input('name', {
      label: 'Name',
      required: true,
      description: 'Name that will be displayed in Schema Driven',
    }),
    WebUiFormField.textarea('description', {
      label: 'Description',
      description: 'Displays the description for content editors and API users',
    }),
  ]
}
