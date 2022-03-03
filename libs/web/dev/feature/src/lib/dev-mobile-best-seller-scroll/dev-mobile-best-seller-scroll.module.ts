import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileBestSellerScrollComponent } from './dev-mobile-best-seller-scroll.component'
import { WebUiMobilePreviewModule } from '@schema-driven/web/ui/mobile-preview'
import { WebUiMobileBestSellerScrollModule } from '@schema-driven/web/ui/mobile-best-seller-scroll'
@NgModule({
  declarations: [DevMobileBestSellerScrollComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileBestSellerScrollComponent }]),
    WebUiMobilePreviewModule,
    WebUiMobileBestSellerScrollModule,
  ],
})
export class DevMobileBestSellerScrollModule {}
