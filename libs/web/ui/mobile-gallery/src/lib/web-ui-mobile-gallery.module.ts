import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiMobileGalleryComponent } from './web-ui-mobile-gallery.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiMobileGalleryComponent],
  exports: [WebUiMobileGalleryComponent],
})
export class WebUiMobileGalleryModule {}
