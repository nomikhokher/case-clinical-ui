import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileProfileComponent } from './dev-mobile-profile.component'
import { WebUiMobilePreviewModule } from '@schema-driven/web/ui/mobile-preview'
import { WebUiMobileProfileModule } from '@schema-driven/web/ui/mobile-profile'

@NgModule({
  declarations: [DevMobileProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileProfileComponent }]),
    WebUiMobilePreviewModule,
    WebUiMobileProfileModule,
  ],
})
export class DevMobileProfileModule {}
