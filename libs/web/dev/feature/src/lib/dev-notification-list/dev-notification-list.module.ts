import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevNotificationListComponent } from './dev-notification-list.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevNotificationListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevNotificationListComponent }]),
    WebUiPreviewModule,
  ],
})
export class DevNotificationListModule {}
