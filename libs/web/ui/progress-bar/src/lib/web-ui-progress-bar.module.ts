import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiProgressBarComponent } from './web-ui-progress-bar.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiProgressBarComponent],
  exports: [WebUiProgressBarComponent],
})
export class WebUiProgressBarModule {}
