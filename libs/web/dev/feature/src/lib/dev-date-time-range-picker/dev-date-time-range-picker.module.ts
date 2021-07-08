import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevDateTimeRangePickerComponent } from './dev-date-time-range-picker.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiDateTimeRangePickerModule } from '@schema-driven/web/ui/date-time-range-picker'

@NgModule({
  declarations: [DevDateTimeRangePickerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevDateTimeRangePickerComponent }]),
    WebUiPreviewModule,
    WebUiDateTimeRangePickerModule,
  ],
})
export class DevDateTimeRangePickerModule {}
