import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileNftPreviewComponent } from './dev-mobile-nft-preview.component'
import { WebUiMobilePreviewModule } from '@schema-driven/web/ui/mobile-preview'
import { WebUiMobileNftPreviewModule } from '@schema-driven/web/ui/mobile-nft-preview'
@NgModule({
  declarations: [DevMobileNftPreviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileNftPreviewComponent }]),
    WebUiMobilePreviewModule,
    WebUiMobileNftPreviewModule,
  ],
})
export class DevMobileNftPreviewModule {}
