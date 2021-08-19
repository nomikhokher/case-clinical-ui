import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevShoppingCartComponent } from './dev-shopping-cart.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiShoppingCartModule } from '@schema-driven/web/ui/shopping-cart'

@NgModule({
  declarations: [DevShoppingCartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevShoppingCartComponent }]),
    WebUiShoppingCartModule,
    WebUiPreviewModule,
  ],
})
export class DevShoppingCartModule {}
