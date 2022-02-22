import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileHomeComponent } from './dev-mobile-home.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevMobileHomeComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: DevMobileHomeComponent }]), WebUiPreviewModule],
})
export class DevMobileHomeModule {}
