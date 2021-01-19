import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TenantHeaderModule, TenantUserFormModule, TenantUserTableModule } from '@metadata/web/tenant/ui'
import { TenantDetailComponent } from './tenant-detail.component'

const routes: Routes = [{ path: '', component: TenantDetailComponent }]

@NgModule({
  declarations: [TenantDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TenantUserFormModule,
    TenantHeaderModule,
    TenantUserTableModule,
    TenantUserFormModule,
  ],
})
export class TenantDetailModule {}
