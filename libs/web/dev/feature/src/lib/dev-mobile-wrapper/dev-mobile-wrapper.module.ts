import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileWrapperComponent } from './dev-mobile-wrapper.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiMobileWrapperModule } from '@schema-driven/web/ui/mobile-wrapper'
@NgModule({
  declarations: [DevMobileWrapperComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileWrapperComponent }]),
    WebUiPreviewModule,
    WebUiMobileWrapperModule,
  ],
})
export class DevMobileWrapperModule {}
