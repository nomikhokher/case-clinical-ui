import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiShoppingCartComponent } from './web-ui-shopping-cart.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiShoppingCartComponent],
  exports: [WebUiShoppingCartComponent],
})
export class WebUiShoppingCartModule {}
