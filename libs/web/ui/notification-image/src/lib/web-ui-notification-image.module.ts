import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiNotificationImageComponent } from './web-ui-notification-image.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiNotificationImageComponent],
  exports: [WebUiNotificationImageComponent],
})
export class WebUiNotificationImageModule {}
