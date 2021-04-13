import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevBadgeComponent } from './dev-badge.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiBadgeModule } from '@schema-driven/web/ui/badge'

@NgModule({
  declarations: [DevBadgeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevBadgeComponent }]),
    WebUiPreviewModule,
    WebUiBadgeModule,
  ],
})
export class DevBadgeModule {}
