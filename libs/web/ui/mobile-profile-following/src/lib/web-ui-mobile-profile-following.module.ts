import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiMobileProfileFollowingComponent } from './web-ui-mobile-profile-following.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiMobileProfileFollowingComponent],
  exports: [WebUiMobileProfileFollowingComponent],
})
export class WebUiMobileProfileFollowingModule {}
