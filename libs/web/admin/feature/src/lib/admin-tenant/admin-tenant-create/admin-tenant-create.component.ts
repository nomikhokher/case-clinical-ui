import { Component } from '@angular/core'
import { AdminCreateTenantInput } from '@schema-driven/web/core/data-access'
import { WebUiFormField } from '@schema-driven/web/ui/form'
import { AdminTenantCreateStore } from './admin-tenant-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header title="Create Tenant" linkPath=".." linkTitle="Back"></ui-page-header>
      <admin-tenant-form (submitForm)="createTenant($event)"></admin-tenant-form>
    </ng-container>
  `,
  providers: [AdminTenantCreateStore],
})
export class AdminTenantCreateComponent {
  readonly vm$ = this.store.vm$
  fields = [WebUiFormField.input('name', { label: 'Name', required: true })]
  constructor(private readonly store: AdminTenantCreateStore) {}

  createTenant(input: AdminCreateTenantInput) {
    this.store.createTenantEffect(input)
  }
}
