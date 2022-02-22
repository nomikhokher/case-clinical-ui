import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiMobileHomeComponent } from './web-ui-mobile-home.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiMobileHomeComponent],
  exports: [WebUiMobileHomeComponent],
})
export class WebUiMobileHomeModule {}
