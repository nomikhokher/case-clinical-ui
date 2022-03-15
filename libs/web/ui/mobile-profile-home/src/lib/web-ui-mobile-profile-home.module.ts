import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiMobileProfileHomeComponent } from './web-ui-mobile-profile-home.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiMobileProfileHomeComponent],
  exports: [WebUiMobileProfileHomeComponent],
})
export class WebUiMobileProfileHomeModule {}
