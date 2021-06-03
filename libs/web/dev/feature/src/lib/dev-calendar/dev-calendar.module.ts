import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevCalendarComponent } from './dev-calendar.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiCalendarModule } from '@schema-driven/web/ui/calendar'

@NgModule({
  declarations: [DevCalendarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevCalendarComponent }]),
    WebUiPreviewModule,
    WebUiCalendarModule,
  ],
})
export class DevCalendarModule {}
