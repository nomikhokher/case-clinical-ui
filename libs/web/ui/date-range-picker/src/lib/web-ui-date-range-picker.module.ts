import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { WebUiDateRangePickerComponent } from './web-ui-date-range-picker.component'

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [WebUiDateRangePickerComponent],
  exports: [WebUiDateRangePickerComponent],
})
export class WebUiDateRangePickerModule {}
