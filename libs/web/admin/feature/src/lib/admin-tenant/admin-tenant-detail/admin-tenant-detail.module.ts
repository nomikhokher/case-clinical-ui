import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TenantUserFormModule, TenantUserTableModule } from '@schema-driven/web/admin/ui'
import { WebUiPageHeaderModule } from '@schema-driven/web/ui/page-header'
import { AdminTenantDetailComponent } from './admin-tenant-detail.component'

const routes: Routes = [{ path: '', component: AdminTenantDetailComponent }]

@NgModule({
  declarations: [AdminTenantDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TenantUserFormModule,
    TenantUserTableModule,
    TenantUserFormModule,
    WebUiPageHeaderModule,
  ],
})
export class AdminTenantDetailModule {}
