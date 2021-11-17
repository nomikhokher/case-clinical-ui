import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiProgressBarProComponent } from './web-ui-progress-bar-pro.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiProgressBarProComponent],
  exports: [WebUiProgressBarProComponent],
})
export class WebUiProgressBarProModule {}
