import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileProfileComponent } from './dev-mobile-profile.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevMobileProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileProfileComponent }]),
    WebUiPreviewModule,
  ],
})
export class DevMobileProfileModule {}
