import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiMobileWalletComponent } from './web-ui-mobile-wallet.component'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiMobileWalletComponent],
  exports: [WebUiMobileWalletComponent],
})
export class WebUiMobileWalletModule {}
