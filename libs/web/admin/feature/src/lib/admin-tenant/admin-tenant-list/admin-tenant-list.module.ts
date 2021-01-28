import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TenantTableModule } from '@schema-driven/web/admin/ui'
import { WebUiPageHeaderModule } from '@schema-driven/web/ui/page-header'
import { AdminTenantListComponent } from './admin-tenant-list.component'

const routes: Routes = [{ path: '', component: AdminTenantListComponent }]

@NgModule({
  declarations: [AdminTenantListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TenantTableModule, WebUiPageHeaderModule],
})
export class AdminTenantListModule {}
