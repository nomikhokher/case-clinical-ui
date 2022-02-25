import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileHomeScrollComponent } from './dev-mobile-home-scroll.component'
import { WebUiMobilePreviewModule } from '@schema-driven/web/ui/mobile-preview'
import { WebUiMobileHomeScrollModule } from '@schema-driven/web/ui/mobile-home-scroll'
@NgModule({
  declarations: [DevMobileHomeScrollComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileHomeScrollComponent }]),
    WebUiMobilePreviewModule,
    WebUiMobileHomeScrollModule,
  ],
})
export class DevMobileHomeScrollModule {}
