import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMiniCalendarComponent } from './dev-mini-calendar.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiMiniCalendarModule } from '@schema-driven/web/ui/mini-calendar'

@NgModule({
  declarations: [DevMiniCalendarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMiniCalendarComponent }]),
    WebUiPreviewModule,
    WebUiMiniCalendarModule,
  ],
})
export class DevMiniCalendarModule {}
