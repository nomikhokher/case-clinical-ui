import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevProductQuickviewsComponent } from './dev-product-quickviews.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiProductQuickviewsModule } from '@schema-driven/web/ui/product-quickviews'

@NgModule({
  declarations: [DevProductQuickviewsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevProductQuickviewsComponent }]),
    WebUiPreviewModule,
    WebUiProductQuickviewsModule,
  ],
})
export class DevProductQuickviewsModule {}
