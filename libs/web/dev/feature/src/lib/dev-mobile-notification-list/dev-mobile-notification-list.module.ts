import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileNotificationListComponent } from './dev-mobile-notification-list.component'
import { WebUiMobilePreviewModule } from '@schema-driven/web/ui/mobile-preview'
import { WebUiMobileNotificationListModule } from '@schema-driven/web/ui/mobile-notification-list'

@NgModule({
  declarations: [DevMobileNotificationListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileNotificationListComponent }]),
    WebUiMobilePreviewModule,
    WebUiMobileNotificationListModule,
  ],
})
export class DevMobileNotificationListModule {}
