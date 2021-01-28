import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TenantFormModule } from '@schema-driven/web/admin/ui'
import { SchemaHeaderModule, SchemaTableModule, SelectTenantListModule } from '@schema-driven/web/schema/ui'

import { WebUiPageHeaderModule } from '@schema-driven/web/ui/page-header'
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
    TenantFormModule,
    WebUiPageHeaderModule,
  ],
})
export class TenantCreateModule {}
