import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileDiscoveryActionComponent } from './dev-mobile-discovery-action.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevMobileDiscoveryActionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileDiscoveryActionComponent }]),
    WebUiPreviewModule,
  ],
})
export class DevMobileDiscoveryActionModule {}
