import { Component } from '@angular/core'
import { CreateSchemaInput } from '@metadata/web/core/data-access'
import { WebUiFormField } from '@metadata/web/ui/form'
import { SchemaCreateStore } from './schema-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <schema-header title="Create Schema" linkPath=".." linkTitle="Back"></schema-header>
      <schema-form [fields]="fields" [schema]="{}" (submitForm)="createSchema($event)"></schema-form>
    </ng-container>
  `,
  providers: [SchemaCreateStore],
})
export class SchemaCreateComponent {
  readonly vm$ = this.store.vm$
  fields = [WebUiFormField.input('name', { label: 'Name', required: true })]
  constructor(private readonly store: SchemaCreateStore) {}

  createSchema(input: CreateSchemaInput) {
    this.store.createSchemaEffect(input)
  }
}
