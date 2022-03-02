import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiMobileBestSellerScrollComponent } from './web-ui-mobile-best-seller-scroll.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiMobileBestSellerScrollComponent],
  exports: [WebUiMobileBestSellerScrollComponent],
})
export class WebUiMobileBestSellerScrollModule {}
