import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileCameraComponent } from './dev-mobile-camera.component'
import { WebUiMobilePreviewModule } from '@schema-driven/web/ui/mobile-preview'

@NgModule({
  declarations: [DevMobileCameraComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileCameraComponent }]),
    WebUiMobilePreviewModule,
  ],
})
export class DevMobileCameraModule {}
