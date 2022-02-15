import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiMobileCodeComponent } from './web-ui-mobile-code.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiMobileCodeComponent],
  exports: [WebUiMobileCodeComponent],
})
export class WebUiMobileCodeModule {}
