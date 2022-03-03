import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiNotificationListComponent } from './web-ui-notification-list.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiNotificationListComponent],
  exports: [WebUiNotificationListComponent],
})
export class WebUiNotificationListModule {}
