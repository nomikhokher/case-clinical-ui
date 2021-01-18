import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { SchemaHeaderModule, SchemaTableModule, SelectTenantListModule } from '@metadata/web/schema/ui'
import { TenantPickerComponent } from './tenant-picker.component'

const routes: Routes = [{ path: '', component: TenantPickerComponent }]

@NgModule({
  declarations: [TenantPickerComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SchemaTableModule, SchemaHeaderModule, SelectTenantListModule],
})
export class TenantPickerModule {}
