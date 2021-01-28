import { Component } from '@angular/core'
import { CreateTenantInput } from '@schema-driven/web/core/data-access'
import { TenantCreateStore } from './tenant-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header title="Create Tenant" linkPath=".." linkTitle="Back"></ui-page-header>
      <admin-tenant-form (submitForm)="createTenant($event)"></admin-tenant-form>
    </ng-container>
  `,
  providers: [TenantCreateStore],
})
export class TenantCreateComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: TenantCreateStore) {}

  createTenant(input: CreateTenantInput) {
    this.store.createTenantEffect(input)
  }
}
