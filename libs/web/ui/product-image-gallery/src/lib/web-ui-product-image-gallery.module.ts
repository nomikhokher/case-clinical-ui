import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiProductImageGalleryComponent } from './web-ui-product-image-gallery.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiProductImageGalleryComponent],
  exports: [WebUiProductImageGalleryComponent],
})
export class WebUiProductImageGalleryModule {}
