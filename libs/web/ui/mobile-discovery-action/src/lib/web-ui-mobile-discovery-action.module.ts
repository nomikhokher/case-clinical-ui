import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiMobileDiscoveryActionComponent } from './web-ui-mobile-discovery-action.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiMobileDiscoveryActionComponent],
  exports: [WebUiMobileDiscoveryActionComponent],
})
export class WebUiMobileDiscoveryActionModule {}
