import { Component } from '@angular/core'
import { CreateTenantInput } from '@metadata/web/core/data-access'
import { TenantCreateStore } from './tenant-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <tenant-header title="Create Tenant" linkPath=".." linkTitle="Back"></tenant-header>
      <tenant-form (submitForm)="createTenant($event)"></tenant-form>
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
