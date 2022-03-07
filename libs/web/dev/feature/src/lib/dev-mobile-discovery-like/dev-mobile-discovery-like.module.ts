import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileDiscoveryLikeComponent } from './dev-mobile-discovery-like.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevMobileDiscoveryLikeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileDiscoveryLikeComponent }]),
    WebUiPreviewModule,
  ],
})
export class DevMobileDiscoveryLikeModule {}
