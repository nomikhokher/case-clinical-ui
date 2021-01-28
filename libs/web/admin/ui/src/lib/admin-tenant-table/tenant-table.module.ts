import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TenantTableComponent } from './tenant-table.component'

@NgModule({
  declarations: [TenantTableComponent],
  exports: [TenantTableComponent],
  imports: [CommonModule, RouterModule],
})
export class TenantTableModule {}
