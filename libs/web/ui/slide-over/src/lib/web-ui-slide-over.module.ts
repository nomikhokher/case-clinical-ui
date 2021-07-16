import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@schema-driven/web/ui/button'

import { WebUiSlideOverComponent } from './web-ui-slide-over.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiButtonModule],
  declarations: [WebUiSlideOverComponent],
  exports: [WebUiSlideOverComponent],
})
export class WebUiSlideOverModule {}
