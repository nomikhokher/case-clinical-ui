import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevInputSelectComponent } from './dev-input-select.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiInputSelectModule } from '@schema-driven/web/ui/input-select'

@NgModule({
  declarations: [DevInputSelectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevInputSelectComponent }]),
    WebUiPreviewModule,
    WebUiInputSelectModule,
  ],
})
export class DevInputSelectModule {}
