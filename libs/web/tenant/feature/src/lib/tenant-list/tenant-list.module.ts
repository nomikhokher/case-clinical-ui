import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { TenantHeaderModule, TenantTableModule } from '@metadata/web/tenant/ui'
import { TenantListComponent } from './tenant-list.component'

const routes: Routes = [{ path: '', component: TenantListComponent }]

@NgModule({
  declarations: [TenantListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TenantTableModule, TenantHeaderModule],
})
export class TenantListModule {}
