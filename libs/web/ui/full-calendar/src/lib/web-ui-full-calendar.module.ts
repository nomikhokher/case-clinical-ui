import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiFullCalendarComponent } from './web-ui-full-calendar.component'
import { FullCalendarModule } from '@fullcalendar/angular'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'

FullCalendarModule.registerPlugins([dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin])

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FullCalendarModule, // register FullCalendar with you app
  ],
  declarations: [WebUiFullCalendarComponent],
  exports: [WebUiFullCalendarComponent],
})
export class WebUiFullCalendarModule {}
