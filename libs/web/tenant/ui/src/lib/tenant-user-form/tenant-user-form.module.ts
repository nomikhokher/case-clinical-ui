import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiFormModule } from '@metadata/web/ui/form'
import { TenantUserFormComponent } from './tenant-user-form.component'

@NgModule({
  declarations: [TenantUserFormComponent],
  exports: [TenantUserFormComponent],
  imports: [CommonModule, RouterModule, WebUiFormModule],
})
export class TenantUserFormModule {}
