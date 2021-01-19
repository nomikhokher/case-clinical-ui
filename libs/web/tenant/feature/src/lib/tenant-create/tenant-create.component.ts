import { Component } from '@angular/core'
import { AdminCreateTenantInput } from '@metadata/web/core/data-access'
import { WebUiFormField } from '@metadata/web/ui/form'
import { TenantCreateStore } from './tenant-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <tenant-header title="Create Tenant" linkPath=".." linkTitle="Back"></tenant-header>
      <tenant-form [fields]="fields" [tenant]="{}" (submitForm)="createTenant($event)"></tenant-form>
    </ng-container>
  `,
  providers: [TenantCreateStore],
})
export class TenantCreateComponent {
  readonly vm$ = this.store.vm$
  fields = [WebUiFormField.input('name', { label: 'Name', required: true })]
  constructor(private readonly store: TenantCreateStore) {}

  createTenant(input: AdminCreateTenantInput) {
    this.store.createTenantEffect(input)
  }
}
