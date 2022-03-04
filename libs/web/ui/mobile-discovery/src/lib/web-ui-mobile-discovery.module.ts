import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiMobileDiscoveryComponent } from './web-ui-mobile-discovery.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiMobileDiscoveryComponent],
  exports: [WebUiMobileDiscoveryComponent],
})
export class WebUiMobileDiscoveryModule {}
