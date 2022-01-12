import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiAvatarComponent } from './web-ui-avatar.component'

import { ClickOutsideModule } from 'ng-click-outside'
@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule, ClickOutsideModule],
  declarations: [WebUiAvatarComponent],
  exports: [WebUiAvatarComponent],
})
export class WebUiAvatarModule {}
