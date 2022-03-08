import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileDiscoveryComponent } from './dev-mobile-discovery.component'
import { WebUiMobilePreviewModule } from '@schema-driven/web/ui/mobile-preview'
import { WebUiMobileDiscoveryModule } from '@schema-driven/web/ui/mobile-discovery'

@NgModule({
  declarations: [DevMobileDiscoveryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileDiscoveryComponent }]),
    WebUiMobilePreviewModule,
    WebUiMobileDiscoveryModule,
  ],
})
export class DevMobileDiscoveryModule {}
