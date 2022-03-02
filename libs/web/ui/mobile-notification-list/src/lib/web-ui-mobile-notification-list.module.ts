import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiMobileNotificationListComponent } from './web-ui-mobile-notification-list.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiMobileNotificationListComponent],
  exports: [WebUiMobileNotificationListComponent],
})
export class WebUiMobileNotificationListModule {}
