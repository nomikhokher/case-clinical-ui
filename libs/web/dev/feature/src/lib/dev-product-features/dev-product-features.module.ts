import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevProductFeaturesComponent } from './dev-product-features.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiProductFeaturesModule } from '@schema-driven/web/ui/product-features'

@NgModule({
  declarations: [DevProductFeaturesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevProductFeaturesComponent }]),
    WebUiPreviewModule,
    WebUiProductFeaturesModule,
  ],
})
export class DevProductFeaturesModule {}
