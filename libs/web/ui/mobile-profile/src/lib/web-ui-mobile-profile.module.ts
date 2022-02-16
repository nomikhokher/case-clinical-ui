import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiMobileProfileComponent } from './web-ui-mobile-profile.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiMobileProfileComponent],
  exports: [WebUiMobileProfileComponent],
})
export class WebUiMobileProfileModule {}
