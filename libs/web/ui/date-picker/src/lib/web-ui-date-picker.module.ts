import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ClickOutsideModule } from 'ng-click-outside'
import { WebUiDatePickerComponent } from './web-ui-date-picker.component'
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDaterangepickerMd.forRoot(),
    ClickOutsideModule,
  ],
  declarations: [WebUiDatePickerComponent],
  exports: [WebUiDatePickerComponent],
})
export class WebUiDatePickerModule {}
