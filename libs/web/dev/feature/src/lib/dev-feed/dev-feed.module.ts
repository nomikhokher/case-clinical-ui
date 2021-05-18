import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevFeedComponent } from './dev-feed.component'
import { WebUiFeedModule } from '@schema-driven/web/ui/feed'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevFeedComponent }]),
    WebUiFeedModule,
    WebUiPreviewModule,
  ],
  exports: [DevFeedComponent],
})
export class DevFeedModule {}
