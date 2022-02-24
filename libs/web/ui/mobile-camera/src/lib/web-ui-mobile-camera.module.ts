import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiMobileCameraComponent } from './web-ui-mobile-camera.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiMobileCameraComponent],
  exports: [WebUiMobileCameraComponent],
})
export class WebUiMobileCameraModule {}
