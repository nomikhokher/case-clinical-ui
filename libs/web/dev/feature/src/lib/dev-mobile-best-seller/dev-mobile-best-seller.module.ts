import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileBestSellerComponent } from './dev-mobile-best-seller.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiMobilePreviewModule } from '@schema-driven/web/ui/mobile-preview'
import { WebUiMobileBestSellerModule } from '@schema-driven/web/ui/mobile-best-seller'

@NgModule({
  declarations: [DevMobileBestSellerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileBestSellerComponent }]),
    WebUiPreviewModule,
    WebUiMobilePreviewModule,
    WebUiMobileBestSellerModule,
  ],
})
export class DevMobileBestSellerModule {}
