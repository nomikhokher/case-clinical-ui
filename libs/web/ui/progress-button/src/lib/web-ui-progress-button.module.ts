import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'

import { WebUiProgressButtonComponent } from './web-ui-progress-button.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiProgressButtonComponent],
  exports: [WebUiProgressButtonComponent],
})
export class WebUiProgressButtonModule {}
