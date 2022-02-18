import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileBestSellerComponent } from './dev-mobile-best-seller.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevMobileBestSellerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileBestSellerComponent }]),
    WebUiPreviewModule,
  ],
})
export class DevMobileBestSellerModule {}
