import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileProfileHomeComponent } from './dev-mobile-profile-home.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevMobileProfileHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileProfileHomeComponent }]),
    WebUiPreviewModule,
  ],
})
export class DevMobileProfileHomeModule {}
