import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileProfileFollowingComponent } from './dev-mobile-profile-following.component'
import { WebUiMobilePreviewModule } from '@schema-driven/web/ui/mobile-preview'
import { WebUiMobileProfileFollowingModule } from '@schema-driven/web/ui/mobile-profile-following'

@NgModule({
  declarations: [DevMobileProfileFollowingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileProfileFollowingComponent }]),
    WebUiMobilePreviewModule,
    WebUiMobileProfileFollowingModule,
  ],
})
export class DevMobileProfileFollowingModule {}
