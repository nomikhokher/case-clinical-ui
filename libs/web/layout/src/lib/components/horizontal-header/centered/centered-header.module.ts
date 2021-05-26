import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiAvatarModule } from '@schema-driven/web/ui/avatar'
import { CenteredHeaderComponent } from './centered-header.component'
import { ClickOutsideModule } from 'ng-click-outside'

@NgModule({
  declarations: [CenteredHeaderComponent],
  imports: [CommonModule, RouterModule, WebUiAvatarModule, ClickOutsideModule],
  exports: [CenteredHeaderComponent],
})
export class CenteredHeaderLayoutModule {}
