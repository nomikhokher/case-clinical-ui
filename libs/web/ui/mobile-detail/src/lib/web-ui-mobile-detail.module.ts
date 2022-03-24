import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiMobileDetailComponent } from './web-ui-mobile-detail.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiMobileDetailComponent],
  exports: [WebUiMobileDetailComponent],
})
export class WebUiMobileDetailModule {}
