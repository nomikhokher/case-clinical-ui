import { Component, OnInit } from '@angular/core'
import { TenantListStore } from './tenant-list.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <tenant-header title="Tenants" linkPath="create" linkTitle="Create Tenant"></tenant-header>
      <ng-container *ngIf="vm.loading">
        <div class="flex py-36 animate-pulse justify-center align-center">LOADING...</div>
      </ng-container>
      <ng-container *ngIf="!vm.loading">
        <tenant-table [tenants]="vm.tenants"></tenant-table>
      </ng-container>
    </ng-container>
  `,
  providers: [TenantListStore],
})
export class TenantListComponent implements OnInit {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: TenantListStore) {}

  ngOnInit(): void {
    this.store.loadTenantsEffect()
  }
}
