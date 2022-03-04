import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'

import { WebUiMobileDiscoveryComponent } from './web-ui-mobile-discovery.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiMobileDiscoveryComponent],
  exports: [WebUiMobileDiscoveryComponent],
})
export class WebUiMobileDiscoveryModule {}
