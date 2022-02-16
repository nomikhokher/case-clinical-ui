import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileWalletComponent } from './dev-mobile-wallet.component'
import { WebUiMobilePreviewModule } from '@schema-driven/web/ui/mobile-preview'
import { WebUiMobileWalletModule } from '@schema-driven/web/ui/mobile-wallet'
@NgModule({
  declarations: [DevMobileWalletComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileWalletComponent }]),
    WebUiMobilePreviewModule,
    WebUiMobileWalletModule,
  ],
})
export class DevMobileWalletModule {}
