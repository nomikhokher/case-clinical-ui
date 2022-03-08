import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileDiscoveryActionComponent } from './dev-mobile-discovery-action.component'
import { WebUiMobilePreviewModule } from '@schema-driven/web/ui/mobile-preview'
//import { WebUiMobileDiscoveryActionModule } from '@schema-driven/web/ui/mobile-discovery'

@NgModule({
  declarations: [DevMobileDiscoveryActionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileDiscoveryActionComponent }]),
    WebUiMobilePreviewModule,
    //  WebUiMobileDiscoveryActionModule,
  ],
})
export class DevMobileDiscoveryActionModule {}
