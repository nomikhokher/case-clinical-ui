import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { LayoutWrapperComponent } from './layout-wrapper.component'
import { WebUiSlideOverLayoutModule } from '@schema-driven/web/ui/slide-over-layout'

@NgModule({
  declarations: [LayoutWrapperComponent],
  imports: [CommonModule, RouterModule, WebUiSlideOverLayoutModule],
  exports: [LayoutWrapperComponent],
})
export class LayoutWrapperModule {}
