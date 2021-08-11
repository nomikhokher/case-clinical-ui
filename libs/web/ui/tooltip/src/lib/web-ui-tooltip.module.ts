import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiTooltipComponent } from './web-ui-tooltip.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiTooltipComponent],
  exports: [WebUiTooltipComponent],
})
export class WebUiTooltipModule {}
