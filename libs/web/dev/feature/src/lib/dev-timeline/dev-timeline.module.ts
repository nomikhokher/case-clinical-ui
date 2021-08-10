import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevTimelineComponent } from './dev-timeline.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiTimelineModule } from '@schema-driven/web/ui/timeline'

@NgModule({
  declarations: [DevTimelineComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevTimelineComponent }]),
    WebUiTimelineModule,
    WebUiPreviewModule,
  ],
})
export class DevTimelineModule {}
