import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { WebUiCalendarComponent } from './web-ui-calendar.component'

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [WebUiCalendarComponent],
  exports: [WebUiCalendarComponent],
})
export class WebUiCalendarModule {}
