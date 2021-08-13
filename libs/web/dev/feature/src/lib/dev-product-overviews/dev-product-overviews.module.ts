import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevProductOverviewsComponent } from './dev-product-overviews.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiProductOverviewsModule } from '@schema-driven/web/ui/product-overviews'

@NgModule({
  declarations: [DevProductOverviewsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevProductOverviewsComponent }]),
    WebUiPreviewModule,
    WebUiProductOverviewsModule,
  ],
})
export class DevProductOverviewsModule {}
