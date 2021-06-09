import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { WebUiMiniCalendarComponent } from './web-ui-mini-calendar.component'

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [WebUiMiniCalendarComponent],
  exports: [WebUiMiniCalendarComponent],
})
export class WebUiMiniCalendarModule {}
