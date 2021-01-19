import { Component } from '@angular/core'
import { TenantRole } from '@metadata/web/core/data-access'
import { TenantDetailStore } from './tenant-detail.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <tenant-header [title]="'Tenant Details: ' + vm.tenant?.name" linkPath=".." linkTitle="Back"></tenant-header>

      <div class="mb-3 md:mb-6">
        <tenant-user-table
          (removeTenantUser)="removeTenantUser($event)"
          (updateRole)="updateRole($event)"
          [users]="vm.tenant.users"
        ></tenant-user-table>
      </div>
      <tenant-user-form (submitForm)="addUser($event)" [options]="vm.users"></tenant-user-form>
    </ng-container>
  `,
  providers: [TenantDetailStore],
})
export class TenantDetailComponent {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: TenantDetailStore) {}

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
