import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SelectTenantListComponent } from './select-tenant-list.component'

@NgModule({
  declarations: [SelectTenantListComponent],
  exports: [SelectTenantListComponent],
  imports: [CommonModule, RouterModule],
})
export class SelectTenantListModule {}
