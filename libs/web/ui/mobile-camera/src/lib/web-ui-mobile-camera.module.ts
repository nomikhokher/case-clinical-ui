import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiMobileCameraComponent } from './web-ui-mobile-camera.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiMobileCameraComponent],
  exports: [WebUiMobileCameraComponent],
})
export class WebUiMobileCameraModule {}
