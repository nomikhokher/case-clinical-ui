import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileProfileFollowingComponent } from './dev-mobile-profile-following.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevMobileProfileFollowingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileProfileFollowingComponent }]),
    WebUiPreviewModule,
  ],
})
export class DevMobileProfileFollowingModule {}
