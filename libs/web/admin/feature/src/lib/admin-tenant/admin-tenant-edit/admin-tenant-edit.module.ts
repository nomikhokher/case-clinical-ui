import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TenantFormModule } from '@schema-driven/web/admin/ui'
import { WebUiPageHeaderModule } from '@schema-driven/web/ui/page-header'
import { AdminTenantEditComponent } from './admin-tenant-edit.component'

const routes: Routes = [{ path: '', component: AdminTenantEditComponent }]

@NgModule({
  declarations: [AdminTenantEditComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TenantFormModule, WebUiPageHeaderModule],
})
export class AdminTenantEditModule {}
