import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiSlideOverLayoutComponent } from './web-ui-slide-over-layout.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiSlideOverLayoutComponent],
  exports: [WebUiSlideOverLayoutComponent],
})
export class WebUiSlideOverLayoutModule {}
