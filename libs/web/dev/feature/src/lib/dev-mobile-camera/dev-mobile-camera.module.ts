import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileCameraComponent } from './dev-mobile-camera.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevMobileCameraComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileCameraComponent }]),
    WebUiPreviewModule,
  ],
})
export class DevMobileCameraModule {}
