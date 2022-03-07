import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'

import { WebUiMobileDiscoveryLikeComponent } from './web-ui-mobile-discovery-like.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiMobileDiscoveryLikeComponent],
  exports: [WebUiMobileDiscoveryLikeComponent],
})
export class WebUiMobileDiscoveryLikeModule {}
