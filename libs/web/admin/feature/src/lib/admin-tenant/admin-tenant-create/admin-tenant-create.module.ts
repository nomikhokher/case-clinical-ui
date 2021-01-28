import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TenantFormModule } from '@schema-driven/web/admin/ui'
import { WebUiPageHeaderModule } from '@schema-driven/web/ui/page-header'

import { AdminTenantCreateComponent } from './admin-tenant-create.component'

const routes: Routes = [{ path: '', component: AdminTenantCreateComponent }]

@NgModule({
  declarations: [AdminTenantCreateComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TenantFormModule, WebUiPageHeaderModule],
})
export class AdminTenantCreateModule {}
