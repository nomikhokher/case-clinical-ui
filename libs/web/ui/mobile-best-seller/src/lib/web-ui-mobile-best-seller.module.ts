import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiMobileBestSellerComponent } from './web-ui-mobile-best-seller.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiMobileBestSellerComponent],
  exports: [WebUiMobileBestSellerComponent],
})
export class WebUiMobileBestSellerModule {}
