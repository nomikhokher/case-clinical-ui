import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiAlertComponent } from './web-ui-alert.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiAlertComponent],
  exports: [WebUiAlertComponent],
})
export class WebUiAlertModule {}
