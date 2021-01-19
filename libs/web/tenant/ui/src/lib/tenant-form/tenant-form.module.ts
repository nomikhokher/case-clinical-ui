import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiFormModule } from '@metadata/web/ui/form'
import { TenantFormComponent } from './tenant-form.component'

@NgModule({
  declarations: [TenantFormComponent],
  exports: [TenantFormComponent],
  imports: [CommonModule, RouterModule, WebUiFormModule],
})
export class TenantFormModule {}
