import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileGalleryComponent } from './dev-mobile-gallery.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiMobilePreviewModule } from '@schema-driven/web/ui/mobile-preview'
import { WebUiMobileGalleryModule } from '@schema-driven/web/ui/mobile-gallery'
@NgModule({
  declarations: [DevMobileGalleryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileGalleryComponent }]),
    WebUiPreviewModule,
    WebUiMobilePreviewModule,
    WebUiMobileGalleryModule,
  ],
})
export class DevMobileGalleryModule {}
