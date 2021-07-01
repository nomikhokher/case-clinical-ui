import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevDatePickerComponent } from './dev-date-picker.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiDatePickerModule } from '@schema-driven/web/ui/date-picker'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [DevDatePickerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevDatePickerComponent }]),
    WebUiPreviewModule,
    WebUiDatePickerModule,
    FormsModule,
  ],
})
export class DevDatePickerModule {}
