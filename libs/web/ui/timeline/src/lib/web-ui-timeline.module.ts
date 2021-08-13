import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiTimelineComponent } from './web-ui-timeline.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiTimelineComponent],
  exports: [WebUiTimelineComponent],
})
export class WebUiTimelineModule {}
