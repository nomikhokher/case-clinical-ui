import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiTableModule } from '@schema-driven/web/ui/table'
import { DevTableComponent } from './dev-table.component'

@NgModule({
  declarations: [DevTableComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: DevTableComponent }]), WebUiTableModule],
})
export class DevTableModule {}
