import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileNftCompleteComponent } from './dev-mobile-nft-complete.component'
import { WebUiMobilePreviewModule } from '@schema-driven/web/ui/mobile-preview'
import { WebUiMobileNftCompleteModule } from '@schema-driven/web/ui/mobile-nft-complete'
@NgModule({
  declarations: [DevMobileNftCompleteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileNftCompleteComponent }]),
    WebUiMobilePreviewModule,
    WebUiMobileNftCompleteModule,
  ],
})
export class DevMobileNftCompleteModule {}
