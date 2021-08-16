import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevProductImageGalleryComponent } from './dev-product-image-gallery.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiProductImageGalleryModule } from '@schema-driven/web/ui/product-image-gallery'

@NgModule({
  declarations: [DevProductImageGalleryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevProductImageGalleryComponent }]),
    WebUiPreviewModule,
    WebUiProductImageGalleryModule,
  ],
})
export class DevProductImageGalleryModule {}
