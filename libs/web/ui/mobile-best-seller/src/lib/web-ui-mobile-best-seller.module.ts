import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiMobileBestSellerComponent } from './web-ui-mobile-best-seller.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiMobileBestSellerComponent],
  exports: [WebUiMobileBestSellerComponent],
})
export class WebUiMobileBestSellerModule {}
