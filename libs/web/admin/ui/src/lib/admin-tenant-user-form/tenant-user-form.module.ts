import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@schema-driven/web/ui/button'
import { WebUiFormModule } from '@schema-driven/web/ui/form'
import { TenantUserFormComponent } from './tenant-user-form.component'

@NgModule({
  declarations: [TenantUserFormComponent],
  exports: [TenantUserFormComponent],
  imports: [CommonModule, RouterModule, WebUiFormModule, WebUiButtonModule],
})
export class TenantUserFormModule {}
