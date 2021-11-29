import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiUserBadgeComponent } from './web-ui-user-badge.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiUserBadgeComponent],
  exports: [WebUiUserBadgeComponent],
})
export class WebUiUserBadgeModule {}
