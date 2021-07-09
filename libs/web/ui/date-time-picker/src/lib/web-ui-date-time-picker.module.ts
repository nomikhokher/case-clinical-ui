import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { WebUiDateTimePickerComponent } from './web-ui-date-time-picker.component'

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [WebUiDateTimePickerComponent],
  exports: [WebUiDateTimePickerComponent],
})
export class WebUiDateTimePickerModule {}
