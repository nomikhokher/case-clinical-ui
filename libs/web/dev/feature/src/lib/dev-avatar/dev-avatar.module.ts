import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevAvatarComponent } from './dev-avatar.component'

@NgModule({
  declarations: [DevAvatarComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: DevAvatarComponent }])],
})
export class DevAvatarModule {}
