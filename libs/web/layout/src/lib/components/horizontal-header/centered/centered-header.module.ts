import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiAvatarModule } from '@schema-driven/web/ui/avatar'
import { CenteredHeaderComponent } from './centered-header.component'

@NgModule({
  declarations: [CenteredHeaderComponent],
  imports: [CommonModule, RouterModule, WebUiAvatarModule],
  exports: [CenteredHeaderComponent],
})
export class CenteredHeaderLayoutModule {}
