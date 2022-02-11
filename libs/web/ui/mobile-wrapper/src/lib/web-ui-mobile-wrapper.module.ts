import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiMobileWrapperComponent } from './web-ui-mobile-wrapper.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiMobileWrapperComponent],
  exports: [WebUiMobileWrapperComponent],
})
export class WebUiMobileWrapperModule {}
