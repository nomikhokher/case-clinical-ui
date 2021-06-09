import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiTableModule } from '@schema-driven/web/ui/table'
import { DevTableComponent } from './dev-table.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevTableComponent }]),
    WebUiTableModule,
    WebUiPreviewModule,
  ],
})
export class DevTableModule {}
