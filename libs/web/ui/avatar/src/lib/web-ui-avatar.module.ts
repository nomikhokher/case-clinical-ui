import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiAvatarComponent } from './web-ui-avatar.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiAvatarComponent],
  exports: [WebUiAvatarComponent],
})
export class WebUiAvatarModule {}
