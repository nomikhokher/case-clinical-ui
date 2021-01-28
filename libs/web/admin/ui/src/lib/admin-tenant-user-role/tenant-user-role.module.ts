import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiFormModule } from '@schema-driven/web/ui/form'
import { TenantUserRoleComponent } from './tenant-user-role.component'

@NgModule({
  declarations: [TenantUserRoleComponent],
  exports: [TenantUserRoleComponent],
  imports: [CommonModule, RouterModule, WebUiFormModule],
})
export class TenantUserRoleModule {}
