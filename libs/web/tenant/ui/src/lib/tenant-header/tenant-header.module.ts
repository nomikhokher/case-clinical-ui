import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiFormModule } from '@metadata/web/ui/form'
import { TenantHeaderComponent } from './tenant-header.component'

@NgModule({
  declarations: [TenantHeaderComponent],
  exports: [TenantHeaderComponent],
  imports: [CommonModule, RouterModule, WebUiFormModule],
})
export class TenantHeaderModule {}
