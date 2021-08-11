import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevTreeSelectComponent } from './dev-tree-select.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiTreeSelectModule } from '@schema-driven/web/ui/tree-select'

@NgModule({
  declarations: [DevTreeSelectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevTreeSelectComponent }]),
    WebUiTreeSelectModule,
    WebUiPreviewModule,
  ],
})
export class DevTreeSelectModule {}
