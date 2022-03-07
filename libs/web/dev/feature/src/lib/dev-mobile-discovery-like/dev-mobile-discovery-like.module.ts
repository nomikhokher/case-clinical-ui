import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileDiscoveryLikeComponent } from './dev-mobile-discovery-like.component'
import { WebUiMobilePreviewModule } from '@schema-driven/web/ui/mobile-preview'
//import { WebUiMobileDiscoveryLikeModule } from '@schema-driven/web/ui/mobile-discovery-like'

@NgModule({
  declarations: [DevMobileDiscoveryLikeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileDiscoveryLikeComponent }]),
    WebUiMobilePreviewModule,
  ],
})
export class DevMobileDiscoveryLikeModule {}
