import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevDateTimePickerComponent } from './dev-date-time-picker.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiDateTimePickerModule } from '@schema-driven/web/ui/date-time-picker'

@NgModule({
  declarations: [DevDateTimePickerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevDateTimePickerComponent }]),
    WebUiPreviewModule,
    WebUiDateTimePickerModule,
  ],
})
export class DevDateTimePickerModule {}
