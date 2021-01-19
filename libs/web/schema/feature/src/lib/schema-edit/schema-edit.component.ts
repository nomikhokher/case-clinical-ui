import { Component } from '@angular/core'
import { WebUiFormField } from '@metadata/web/ui/form'
import { SchemaEditStore } from './schema-edit.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <schema-header [title]="'Edit schema ' + vm.schema?.name" linkPath=".." linkTitle="Back"></schema-header>
      <schema-form [fields]="fields" [schema]="vm.schema" (submitForm)="updateSchema($event)"></schema-form>
    </ng-container>
  `,
  providers: [SchemaEditStore],
})
export class SchemaEditComponent {
  readonly vm$ = this.store.vm$
  fields = [WebUiFormField.input('name', { label: 'Name', required: true })]

  constructor(private readonly store: SchemaEditStore) {}

  updateSchema(input) {
    const { name } = input
    // this.store.updateSchemaEffect({ name })
  }
}
