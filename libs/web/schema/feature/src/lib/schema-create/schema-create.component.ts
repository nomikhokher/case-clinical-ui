import { Component } from '@angular/core'
import { CreateSchemaInput } from '@schema-driven/web/core/data-access'
import { WebUiFormField } from '@schema-driven/web/ui/form'
import { SchemaCreateStore } from './schema-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header title="Create Schema" linkPath=".." linkTitle="Back"></ui-page-header>
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
