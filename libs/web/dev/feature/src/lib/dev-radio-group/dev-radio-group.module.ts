import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevRadioGroupComponent } from './dev-radio-group.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiFormModule } from '@schema-driven/web/ui/form'

@NgModule({
  declarations: [DevRadioGroupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevRadioGroupComponent }]),
    WebUiPreviewModule,
    WebUiFormModule,
  ],
})
export class DevRadioGroupModule {}
