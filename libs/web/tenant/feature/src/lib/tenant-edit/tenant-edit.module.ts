import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { TenantFormModule, TenantHeaderModule } from '@metadata/web/tenant/ui'
import { TenantEditComponent } from './tenant-edit.component'

const routes: Routes = [{ path: '', component: TenantEditComponent }]

@NgModule({
  declarations: [TenantEditComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TenantFormModule, TenantHeaderModule],
})
export class TenantEditModule {}
