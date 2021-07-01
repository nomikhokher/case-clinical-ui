import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiFormModule } from '@schema-driven/web/ui/form'
import { DevRepeaterComponent } from './dev-repeater.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevRepeaterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevRepeaterComponent }]),
    WebUiFormModule,
    WebUiPreviewModule,
  ],
})
export class DevRepeaterModule {}
