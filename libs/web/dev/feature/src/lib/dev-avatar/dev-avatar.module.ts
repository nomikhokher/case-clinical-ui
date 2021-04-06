import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevAvatarComponent } from './dev-avatar.component'
import { WebUiAvatarModule } from '@schema-driven/web/ui/avatar'

@NgModule({
  declarations: [DevAvatarComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: DevAvatarComponent }]), WebUiAvatarModule],
})
export class DevAvatarModule {}
