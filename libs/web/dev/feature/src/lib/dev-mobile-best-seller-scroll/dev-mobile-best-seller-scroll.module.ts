import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileBestSellerScrollComponent } from './dev-mobile-best-seller-scroll.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevMobileBestSellerScrollComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileBestSellerScrollComponent }]),
    WebUiPreviewModule,
  ],
})
export class DevMobileBestSellerScrollModule {}
