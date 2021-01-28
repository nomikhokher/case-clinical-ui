import { Component, OnInit } from '@angular/core'
import { AdminTenantListStore } from './admin-tenant-list.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header title="Tenants" linkPath="create" linkTitle="Create Tenant"></ui-page-header>
      <ng-container *ngIf="vm.loading">
        <div class="flex py-36 animate-pulse justify-center align-center">LOADING...</div>
      </ng-container>
      <ng-container *ngIf="!vm.loading">
        <admin-tenant-table [tenants]="vm.tenants"></admin-tenant-table>
      </ng-container>
    </ng-container>
  `,
  providers: [AdminTenantListStore],
})
export class AdminTenantListComponent implements OnInit {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: AdminTenantListStore) {}

  ngOnInit(): void {
    this.store.loadTenantsEffect()
  }
}
