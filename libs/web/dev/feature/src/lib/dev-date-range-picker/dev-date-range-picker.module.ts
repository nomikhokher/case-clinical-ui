import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevDateRangePickerComponent } from './dev-date-range-picker.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiDateRangePickerModule } from '@schema-driven/web/ui/date-range-picker'

@NgModule({
  declarations: [DevDateRangePickerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevDateRangePickerComponent }]),
    WebUiPreviewModule,
    WebUiDateRangePickerModule,
  ],
})
export class DevDateRangePickerModule {}
