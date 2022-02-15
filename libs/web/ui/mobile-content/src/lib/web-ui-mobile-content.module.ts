import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiMobileContentComponent } from './web-ui-mobile-content.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiMobileContentComponent],
  exports: [WebUiMobileContentComponent],
})
export class WebUiMobileContentModule {}
