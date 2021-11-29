import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevUserBadgeComponent } from './dev-user-badge.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiUserBadgeModule } from '@schema-driven/web/ui/user-badge'

@NgModule({
  declarations: [DevUserBadgeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevUserBadgeComponent }]),
    WebUiPreviewModule,
    WebUiUserBadgeModule,
  ],
})
export class DevUserBadgeModule {}
