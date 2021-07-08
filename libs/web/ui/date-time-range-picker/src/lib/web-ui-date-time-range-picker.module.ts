import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ClickOutsideModule } from 'ng-click-outside'
import { WebUiDateTimeRangePickerComponent } from './web-ui-date-time-range-picker.component'

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, ClickOutsideModule],
  declarations: [WebUiDateTimeRangePickerComponent],
  exports: [WebUiDateTimeRangePickerComponent],
})
export class WebUiDateTimeRangePickerModule {}
