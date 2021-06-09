import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevFullCalendarComponent } from './dev-full-calendar.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiFullCalendarModule } from '@schema-driven/web/ui/full-calendar'

@NgModule({
  declarations: [DevFullCalendarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevFullCalendarComponent }]),
    WebUiPreviewModule,
    WebUiFullCalendarModule,
  ],
})
export class DevFullCalendarModule {}
