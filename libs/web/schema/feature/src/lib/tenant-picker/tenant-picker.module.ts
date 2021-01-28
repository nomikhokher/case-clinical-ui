import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SchemaTableModule, SelectTenantListModule } from '@schema-driven/web/schema/ui'
import { WebUiPageHeaderModule } from '@schema-driven/web/ui/page-header'
import { TenantPickerComponent } from './tenant-picker.component'

const routes: Routes = [{ path: '', component: TenantPickerComponent }]

@NgModule({
  declarations: [TenantPickerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SchemaTableModule,
    SelectTenantListModule,
    WebUiPageHeaderModule,
  ],
})
export class TenantPickerModule {}
