import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileProfileHomeComponent } from './dev-mobile-profile-home.component'
import { WebUiMobilePreviewModule } from '@schema-driven/web/ui/mobile-preview'
import { WebUiMobileProfileHomeModule } from '@schema-driven/web/ui/mobile-profile-home'

@NgModule({
  declarations: [DevMobileProfileHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileProfileHomeComponent }]),
    WebUiMobilePreviewModule,
    WebUiMobileProfileHomeModule,
  ],
})
export class DevMobileProfileHomeModule {}
