import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiToggleSwitchButtonComponent } from './web-ui-toggle-switch-button.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiToggleSwitchButtonComponent],
  exports: [WebUiToggleSwitchButtonComponent],
})
export class WebUiToggleSwitchButtonModule {}
