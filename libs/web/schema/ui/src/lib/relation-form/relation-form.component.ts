import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core'
import { Relation, RelationType, Schema } from '@schema-driven/web/core/data-access'
import { WebUiFormField } from '@schema-driven/web/ui/form'

@Component({
  selector: 'relation-form',
  template: `
    <div class="p-4">
      <ui-form #form [model]="relation" [fields]="fields" (submitForm)="submitForm.emit($event)">
        <div class="flex space-x-2 justify-end">
          <ng-content></ng-content>
          <ui-button [disabled]="!form?.form?.valid" type="submit" label="Save"> </ui-button>
        </div>
      </ui-form>
    </div>
  `,
})
export class RelationFormComponent implements OnChanges {
  @Input() relation: Relation = {}
  @Input() schema: Schema = {}
  @Output() submitForm = new EventEmitter()
  @Input() fields = []

  ngOnChanges(): void {
    this.fields = [
      WebUiFormField.input('name', {
        label: 'Name',
        required: true,
        description: 'Name that will be displayed in Schema Driven',
      }),
      WebUiFormField.textarea('description', {
        label: 'Description',
        description: 'Displays the description for content editors and API users',
      }),
      WebUiFormField.radio('type', {
        label: 'Type or relation',
        options: Object.keys(RelationType).map((value) => ({ value, label: value })),
      }),
      WebUiFormField.select('relatedId', {
        label: 'Entity to create relation with',
        options: this.schema?.entities?.map((e) => ({ value: e.id, label: e.name })),
      }),
    ]
  }
}
