import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { SchemaHeaderModule, SchemaTableModule, SelectTenantListModule } from '@metadata/web/schema/ui'
import { TenantFormModule, TenantHeaderModule } from '@metadata/web/tenant/ui'
import { TenantCreateComponent } from './tenant-create.component'

const routes: Routes = [{ path: '', component: TenantCreateComponent }]

@NgModule({
  declarations: [TenantCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SchemaTableModule,
    SchemaHeaderModule,
    SelectTenantListModule,
    TenantHeaderModule,
    TenantFormModule,
  ],
})
export class TenantCreateModule {}
