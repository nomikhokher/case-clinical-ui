import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevFeedComponent } from './dev-feed.component'
import { WebUiFeedModule } from '@schema-driven/web/ui/feed'

@NgModule({
  declarations: [DevFeedComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: DevFeedComponent }]), WebUiFeedModule],
  exports: [DevFeedComponent],
})
export class DevFeedModule {}
