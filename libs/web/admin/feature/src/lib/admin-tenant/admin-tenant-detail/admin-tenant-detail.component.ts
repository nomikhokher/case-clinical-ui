import { Component } from '@angular/core'
import { TenantRole } from '@schema-driven/web/core/data-access'
import { AdminTenantDetailStore } from './admin-tenant-detail.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header [title]="'Tenant Details: ' + vm.tenant?.name" linkPath=".." linkTitle="Back"></ui-page-header>

      <div class="mb-3 md:mb-6">
        <admin-tenant-user-table
          (removeTenantUser)="removeTenantUser($event)"
          (updateRole)="updateRole($event)"
          [users]="vm.tenant.users"
        ></admin-tenant-user-table>
      </div>
      <admin-tenant-user-form (submitForm)="addUser($event)" [options]="vm.users"></admin-tenant-user-form>
    </ng-container>
  `,
  providers: [AdminTenantDetailStore],
})
export class AdminTenantDetailComponent {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: AdminTenantDetailStore) {}

  updateRole([tenantUserId, role]: [string, TenantRole]) {
    this.store.updateTenantUserRoleEffect([tenantUserId, role])
  }

  removeTenantUser(tenantUserId: string) {
    this.store.removeTenantUserEffect(tenantUserId)
  }

  addUser($event: any) {
    this.store.addTenantUserEffect([$event.userId, $event.role])
  }
}
