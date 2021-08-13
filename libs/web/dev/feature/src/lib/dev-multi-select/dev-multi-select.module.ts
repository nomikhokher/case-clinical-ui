import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMultiSelectComponent } from './dev-multi-select.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiMultiSelectModule } from '@schema-driven/web/ui/multi-select'

@NgModule({
  declarations: [DevMultiSelectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMultiSelectComponent }]),
    WebUiPreviewModule,
    WebUiMultiSelectModule,
  ],
})
export class DevMultiSelectModule {}
