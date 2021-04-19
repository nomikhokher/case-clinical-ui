import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiNotificationComponent } from './web-ui-notification.component'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiNotificationComponent],
  exports: [WebUiNotificationComponent],
})
export class WebUiNotificationModule {}
