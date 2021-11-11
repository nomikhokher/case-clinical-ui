import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevRadioGroupComponent } from './dev-radio-group.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiRadioGroupModule } from '@schema-driven/web/ui/radio-group'

@NgModule({
  declarations: [DevRadioGroupComponent],
  imports: [
    CommonModule,
    WebUiRadioGroupModule,
    RouterModule.forChild([{ path: '', component: DevRadioGroupComponent }]),
    WebUiPreviewModule,
  ],
})
export class DevRadioGroupModule {}
