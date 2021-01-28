import { Component } from '@angular/core'
import { AdminUpdateTenantInput } from '@schema-driven/web/core/data-access'
import { AdminTenantEditStore } from './admin-tenant-edit.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header [title]="'Edit tenant ' + vm.tenant?.name" linkPath=".." linkTitle="Back"></ui-page-header>
      <admin-tenant-form [tenant]="vm.tenant" (submitForm)="updateTenant($event)"></admin-tenant-form>
    </ng-container>
  `,
  providers: [AdminTenantEditStore],
})
export class AdminTenantEditComponent {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: AdminTenantEditStore) {}

  updateTenant(input: AdminUpdateTenantInput) {
    const { name } = input
    this.store.updateTenantEffect({ name })
  }
}
