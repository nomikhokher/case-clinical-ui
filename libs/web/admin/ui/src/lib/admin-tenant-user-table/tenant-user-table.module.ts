import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiFormModule } from '@schema-driven/web/ui/form'
import { TenantUserRoleModule } from '../admin-tenant-user-role/tenant-user-role.module'
import { TenantUserTableComponent } from './tenant-user-table.component'

@NgModule({
  declarations: [TenantUserTableComponent],
  exports: [TenantUserTableComponent],
  imports: [CommonModule, RouterModule, WebUiFormModule, TenantUserRoleModule],
})
export class TenantUserTableModule {}
