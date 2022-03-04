import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileDiscoveryComponent } from './dev-mobile-discovery.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevMobileDiscoveryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileDiscoveryComponent }]),
    WebUiPreviewModule,
  ],
})
export class DevMobileDiscoveryModule {}
