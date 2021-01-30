import { Component, OnInit } from '@angular/core'
import { TenantPickerStore } from './tenant-picker.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header title="Select the Tenant" linkPath="create" linkTitle="Create Tenant"></ui-page-header>
      <ng-container *ngIf="vm.loading">
        <div class="flex py-36 animate-pulse justify-center align-center">LOADING...</div>
      </ng-container>
      <ng-container *ngIf="!vm.loading">
        <tenant-select-list [tenants]="vm.tenants"></tenant-select-list>
      </ng-container>
    </ng-container>
  `,
  providers: [TenantPickerStore],
})
export class TenantPickerComponent implements OnInit {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: TenantPickerStore) {}

  ngOnInit(): void {
    this.store.loadTenantsEffect()
  }
}
