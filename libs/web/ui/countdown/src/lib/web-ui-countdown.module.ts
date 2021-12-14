import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiCountdownComponent } from './web-ui-countdown.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiCountdownComponent],
  exports: [WebUiCountdownComponent],
})
export class WebUiCountdownModule {}
