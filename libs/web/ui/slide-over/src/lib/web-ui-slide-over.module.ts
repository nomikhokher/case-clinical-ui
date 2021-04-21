import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiSlideOverComponent } from './web-ui-slide-over.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiSlideOverComponent],
  exports: [WebUiSlideOverComponent],
})
export class WebUiSlideOverModule {}
