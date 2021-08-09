import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiDrawingPadComponent } from './web-ui-drawing-pad.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiDrawingPadComponent],
  exports: [WebUiDrawingPadComponent],
})
export class WebUiDrawingPadModule {}
