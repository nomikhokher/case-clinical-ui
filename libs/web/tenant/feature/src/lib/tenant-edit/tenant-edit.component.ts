import { Component } from '@angular/core'
import { AdminUpdateTenantInput } from '@metadata/web/core/data-access'
import { TenantEditStore } from './tenant-edit.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <tenant-header [title]="'Edit tenant ' + vm.tenant?.name" linkPath=".." linkTitle="Back"></tenant-header>
      <tenant-form [tenant]="vm.tenant" (submitForm)="updateTenant($event)"></tenant-form>
    </ng-container>
  `,
  providers: [TenantEditStore],
})
export class TenantEditComponent {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: TenantEditStore) {}

  updateTenant(input: AdminUpdateTenantInput) {
    const { name } = input
    this.store.updateTenantEffect({ name })
  }
}
