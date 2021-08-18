import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevProductListComponent } from './dev-product-list.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiProductListModule } from '@schema-driven/web/ui/product-list'

@NgModule({
  declarations: [DevProductListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevProductListComponent }]),
    WebUiPreviewModule,
    WebUiProductListModule,
  ],
})
export class DevProductListModule {}
